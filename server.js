require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const stringSimilarity = require('string-similarity');
const facilities = require('./data/facilities');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Flattened helper for all brands with parent facility
function getAllBrandEntries() {
  const entries = [];
  facilities.forEach(fac => {
    fac.brands.forEach(brand => {
      entries.push({
        brand,
        facility: fac
      });
    });
  });
  return entries;
}

/**
 * GET /api/quick-list
 * Returns curated quick-test suggestion pills for the UI
 */
app.get('/api/quick-list', (req, res) => {
  const quickList = [
    {
      name: "Midnight Burger Lab",
      area: "Lekki Phase 1",
      score: 96,
      tag: "Ghost Hive (7 Brands)",
      type: "ghost",
      badge: "🚨 7 Co-Located Brands",
      cuisine: "Gourmet Smashed Burgers"
    },
    {
      name: "Terra Kulture Restaurant",
      area: "Victoria Island",
      score: 4,
      tag: "Authentic Dine-In",
      type: "authentic",
      badge: "✅ 120-Seat Verified Venue",
      cuisine: "Contemporary Nigerian Dining"
    },
    {
      name: "The Wok Legend",
      area: "Victoria Island",
      score: 89,
      tag: "Dark Pod (5 Brands)",
      type: "ghost",
      badge: "🚨 5 Virtual Brands",
      cuisine: "Sichuan & Cantonese Stir-Fry"
    },
    {
      name: "The Yellow Chilli",
      area: "Ikeja GRA",
      score: 5,
      tag: "Authentic Dine-In",
      type: "authentic",
      badge: "✅ 85-Seat Standalone",
      cuisine: "Pan-African Fine Dining"
    },
    {
      name: "King Shawarma & Grills",
      area: "Ikeja GRA",
      score: 84,
      tag: "Basement Hub (6 Brands)",
      type: "ghost",
      badge: "🚨 6 Shared Kitchen Brands",
      cuisine: "Lebanese Grills & Wraps"
    },
    {
      name: "Suya Express 24/7",
      area: "Surulere",
      score: 79,
      tag: "Garage Annex (4 Brands)",
      type: "ghost",
      badge: "🚨 4 Unzoned Brands",
      cuisine: "Night Charcoal Grills & Suya"
    },
    {
      name: "Ocean Basket Lekki",
      area: "Lekki Phase 1",
      score: 7,
      tag: "Authentic Seafood",
      type: "authentic",
      badge: "✅ 150-Seat Waterfront",
      cuisine: "Mediterranean Seafood"
    },
    {
      name: "Danube Bistro Ikoyi",
      area: "Ikoyi",
      score: 3,
      tag: "Authentic Patisserie",
      type: "authentic",
      badge: "✅ 45-Seat Garden Cafe",
      cuisine: "Artisan Bakery & Cafe"
    }
  ];

  res.json(quickList);
});

/**
 * GET /api/stats
 * Overview radar telemetry for Lagos food infrastructure
 */
app.get('/api/stats', (req, res) => {
  const entries = getAllBrandEntries();
  const virtualBrands = entries.filter(e => e.brand.virtual).length;
  const authenticBrands = entries.filter(e => !e.brand.virtual).length;
  const highRiskCount = facilities.filter(f => f.ghostIndexScore >= 75).length;
  const totalDineInCapacity = facilities.reduce((sum, f) => sum + (f.dineInCapacity || 0), 0);

  const areas = [...new Set(facilities.map(f => f.area))];

  res.json({
    status: "RADAR_ONLINE",
    meshNode: "LAGOS-SURVEILLANCE-NODE-01",
    totalFacilitiesTracked: facilities.length,
    totalBrandsMonitored: entries.length,
    virtualDarkBrands: virtualBrands,
    authenticDineInVenues: authenticBrands,
    highRiskGhostClusters: highRiskCount,
    totalVerifiedDineInSeats: totalDineInCapacity,
    coverageAreas: areas,
    lastSweepTimestamp: new Date().toISOString()
  });
});

/**
 * GET /api/facilities
 * Returns all facilities or filter by area
 */
app.get('/api/facilities', (req, res) => {
  const { area } = req.query;
  let results = facilities;
  if (area) {
    results = results.filter(f => f.area.toLowerCase() === area.toLowerCase());
  }
  res.json(results);
});

/**
 * GET /api/inspect?q=...
 * Fuzzy matches brand names against the Lagos registry using string-similarity
 * Returns facility details, ghost index score, inspection status, co-located brands
 */
app.get('/api/inspect', (req, res) => {
  const rawQuery = req.query.q;

  if (!rawQuery || typeof rawQuery !== 'string' || !rawQuery.trim()) {
    return res.status(400).json({
      success: false,
      error: "Query parameter 'q' is required. Provide a restaurant or delivery brand name to inspect."
    });
  }

  const query = rawQuery.trim();
  const queryLower = query.toLowerCase();
  const entries = getAllBrandEntries();

  // Score each entry using string-similarity and keyword heuristics
  const scored = entries.map(item => {
    const brandName = item.brand.name;
    const brandLower = brandName.toLowerCase();

    // Baseline string similarity (Dice's coefficient)
    const diceScore = stringSimilarity.compareTwoStrings(queryLower, brandLower);

    // Exact match
    if (queryLower === brandLower) {
      return { ...item, score: 1.0, matchMethod: 'exact' };
    }

    // Direct substring match with length weight
    let substringScore = 0;
    if (brandLower.includes(queryLower) || queryLower.includes(brandLower)) {
      const minLen = Math.min(queryLower.length, brandLower.length);
      const maxLen = Math.max(queryLower.length, brandLower.length);
      substringScore = 0.65 + 0.33 * (minLen / maxLen);
    }

    // Token overlap match
    const qTokens = queryLower.split(/[\s,.-]+/).filter(t => t.length > 2);
    const bTokens = brandLower.split(/[\s,.-]+/).filter(t => t.length > 2);
    let tokenScore = 0;
    if (qTokens.length > 0 && bTokens.length > 0) {
      const matchedTokens = qTokens.filter(qt =>
        bTokens.some(bt => bt.includes(qt) || qt.includes(bt) || stringSimilarity.compareTwoStrings(qt, bt) > 0.7)
      );
      if (matchedTokens.length > 0) {
        tokenScore = 0.45 + 0.45 * (matchedTokens.length / Math.max(qTokens.length, bTokens.length));
      }
    }

    const finalScore = Math.max(diceScore, substringScore, tokenScore);
    return {
      ...item,
      score: finalScore,
      matchMethod: finalScore === substringScore ? 'substring' : finalScore === tokenScore ? 'token' : 'fuzzy'
    };
  });

  // Sort by highest matching score
  scored.sort((a, b) => b.score - a.score);

  const bestMatch = scored[0];

  // If match confidence is too low, return not found with nearest suggestions
  if (!bestMatch || bestMatch.score < 0.25) {
    const suggestions = scored.slice(0, 4).map(s => ({
      name: s.brand.name,
      area: s.facility.area,
      cuisine: s.brand.cuisine
    }));

    return res.status(404).json({
      success: false,
      message: `No matching brand found for "${query}" in Lagos surveillance radar.`,
      query,
      suggestions
    });
  }

  const facility = bestMatch.facility;
  const brand = bestMatch.brand;

  // Format co-located brands cooked in the same room/facility
  const coLocatedBrands = facility.brands.map(b => ({
    name: b.name,
    cuisine: b.cuisine,
    virtual: b.virtual,
    priceTier: b.priceTier,
    platforms: b.platforms,
    platformRating: b.platformRating,
    prepStation: b.prepStation,
    packagingTag: b.packagingTag,
    claimedAddress: b.claimedAddress,
    isTargetSearched: b.name.toLowerCase() === brand.name.toLowerCase()
  }));

  // Forensic summary calculation
  let riskColor = 'green';
  if (facility.ghostIndexScore >= 75) {
    riskColor = 'red';
  } else if (facility.ghostIndexScore >= 40) {
    riskColor = 'amber';
  }

  res.json({
    success: true,
    query,
    matchConfidence: Math.round(bestMatch.score * 100),
    matchedBrand: {
      name: brand.name,
      cuisine: brand.cuisine,
      virtual: brand.virtual,
      priceTier: brand.priceTier,
      platforms: brand.platforms,
      platformRating: brand.platformRating,
      prepStation: brand.prepStation,
      packagingTag: brand.packagingTag,
      claimedAddress: brand.claimedAddress
    },
    ghostIndexScore: facility.ghostIndexScore,
    riskLevel: facility.riskLevel,
    riskColor,
    riskSummary: facility.riskSummary,
    inspectionStatus: facility.inspectionStatus,
    sanitationGrade: facility.sanitationGrade,
    facility: {
      id: facility.id,
      code: facility.facilityCode,
      name: facility.facilityName,
      address: facility.address,
      area: facility.area,
      city: facility.city,
      coordinates: facility.coordinates,
      facilityType: facility.facilityType,
      dineInAvailable: facility.dineInAvailable,
      dineInCapacity: facility.dineInCapacity,
      inspectionStatus: facility.inspectionStatus,
      sanitationGrade: facility.sanitationGrade,
      lastInspected: facility.lastInspected,
      regulatoryBody: facility.regulatoryBody,
      activePermits: facility.activePermits,
      sharedExtraction: facility.sharedExtraction,
      sharedEquipment: facility.sharedEquipment,
      totalBrandsInRoom: facility.brands.length
    },
    coLocatedBrands,
    forensicBreakdown: {
      isMultiBrandRoom: facility.brands.length > 1,
      brandConcentration: `${facility.brands.length} brand${facility.brands.length > 1 ? 's' : ''} in shared kitchen`,
      hasPhysicalDining: facility.dineInAvailable,
      seatingSummary: facility.dineInAvailable ? `${facility.dineInCapacity} verified guest seats` : "ZERO seating - delivery / rider pickup hatch only",
      crossContaminationRisk: facility.brands.length >= 5 ? "Critical (Multiple shared fryers & cooktops)" : facility.brands.length > 1 ? "Elevated (Shared kitchen surfaces)" : "Low (Dedicated single-concept culinary team)",
      extractionCompliance: facility.sharedExtraction ? "High load shared commercial hoods" : "Dedicated exhaust system",
      deliveryPlatformObfuscation: brand.virtual ? "Claims unique storefront address on apps but shares physical cook room" : "Matches registered physical dining premises"
    }
  });
});

// Fallback index.html for root or SPA routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start listening
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[GHOST-KITCHEN-RADAR] Node online on port ${PORT}`);
    console.log(`[GHOST-KITCHEN-RADAR] Surveillance active across ${facilities.length} Lagos facilities`);
  });
}

module.exports = app;
