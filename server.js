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
    // Calabar Quick Targets
    {
      name: "Freddy's Marian",
      area: "Atekong Drive / Marian",
      score: 4,
      tag: "Authentic Dine-In",
      type: "authentic",
      badge: "✅ 160-Seat Dine-In",
      cuisine: "Continental & Lebanese",
      city: "calabar"
    },
    {
      name: "Etta Agbor Dark Pod",
      area: "Etta Agbor",
      score: 96,
      tag: "Ghost Hive (6 Brands)",
      type: "ghost",
      badge: "🚨 6 Co-Located Brands",
      cuisine: "Suya, Pasta & Wings",
      city: "calabar"
    },
    {
      name: "Marina Resort Kitchen",
      area: "Marina Road",
      score: 3,
      tag: "Authentic Waterfront",
      type: "authentic",
      badge: "✅ 220-Seat Open Kitchen",
      cuisine: "Fresh Fisherman Soup",
      city: "calabar"
    },
    {
      name: "MCC Logistics Food Lab",
      area: "MCC Road",
      score: 92,
      tag: "Dark Pod (5 Brands)",
      type: "ghost",
      badge: "🚨 5 Virtual Storefronts",
      cuisine: "Wok & Sliders",
      city: "calabar"
    },
    // Lagos Quick Targets
    {
      name: "Mega Chicken Ikeja",
      area: "Ikeja",
      score: 2,
      tag: "Authentic Flagship",
      type: "authentic",
      badge: "✅ 250-Seat Flagship",
      cuisine: "Nigerian Jollof & Pastries",
      city: "lagos"
    },
    {
      name: "Midnight Burger Lab",
      area: "Lekki Phase 1",
      score: 96,
      tag: "Ghost Hive (7 Brands)",
      type: "ghost",
      badge: "🚨 7 Co-Located Brands",
      cuisine: "Gourmet Smashed Burgers",
      city: "lagos"
    },
    {
      name: "The Place Restaurant VI",
      area: "Victoria Island",
      score: 4,
      tag: "Authentic Lounge",
      type: "authentic",
      badge: "✅ 180-Seat Flagship",
      cuisine: "Asun Jollof & Grills",
      city: "lagos"
    },
    {
      name: "Midnight Noodle Syndicate",
      area: "Yaba",
      score: 98,
      tag: "Ghost Matrix (8 Brands)",
      type: "ghost",
      badge: "🚨 8 Co-Located Brands",
      cuisine: "Spicy Ramen & Street Woks",
      city: "lagos"
    },
    // Abuja Quick Targets
    {
      name: "Nkoyo Wuse 2",
      area: "Wuse 2",
      score: 3,
      tag: "Authentic Heritage",
      type: "authentic",
      badge: "✅ Fine Heritage Dining",
      cuisine: "Spiced Grills",
      city: "abuja"
    },
    {
      name: "Wuse Cyber Commissary",
      area: "Wuse 2",
      score: 97,
      tag: "Ghost Hive (6 Brands)",
      type: "ghost",
      badge: "🚨 6 Virtual Brands",
      cuisine: "Midnight Smashed Burgers",
      city: "abuja"
    },
    // Port Harcourt Quick Targets
    {
      name: "Genesis Restaurant GRA",
      area: "GRA Phase 2",
      score: 4,
      tag: "Authentic Flagship",
      type: "authentic",
      badge: "✅ 150-Seat Flagship",
      cuisine: "Native Soup & Grills",
      city: "portharcourt"
    },
    {
      name: "Peter Odili Dark Commissary",
      area: "Peter Odili",
      score: 95,
      tag: "Ghost Hive (6 Brands)",
      type: "ghost",
      badge: "🚨 6 Co-Located Brands",
      cuisine: "Bole & Wings",
      city: "portharcourt"
    },
    // Ibadan Quick Targets
    {
      name: "Iya Meta Amala Bodija",
      area: "Bodija",
      score: 3,
      tag: "Authentic Heritage",
      type: "authentic",
      badge: "✅ Heritage Amala Dine-In",
      cuisine: "Amala Dudu & Abula",
      city: "ibadan"
    },
    {
      name: "Bodija Dark Commissary",
      area: "Bodija",
      score: 94,
      tag: "Ghost Hive (6 Brands)",
      type: "ghost",
      badge: "🚨 6 Shared Kitchen Brands",
      cuisine: "Noodles & Wings",
      city: "ibadan"
    }
  ];

  res.json(quickList);
});


/**
 * GET /api/stats
 * Overview radar telemetry for nationwide or city-specific food infrastructure
 */
app.get('/api/stats', (req, res) => {
  const { city } = req.query;
  let targetFacilities = facilities;
  if (city && city.toLowerCase() !== 'all') {
    targetFacilities = targetFacilities.filter(f => f.city && f.city.toLowerCase() === city.toLowerCase());
  }

  const entries = [];
  targetFacilities.forEach(fac => {
    fac.brands.forEach(brand => {
      entries.push({
        brand,
        facility: fac
      });
    });
  });
  const virtualBrands = entries.filter(e => e.brand.virtual || e.brand.isVirtual).length;
  const authenticBrands = entries.filter(e => !e.brand.virtual && !e.brand.isVirtual).length;
  const highRiskCount = targetFacilities.filter(f => f.ghostIndexScore >= 75).length;
  const totalDineInCapacity = targetFacilities.reduce((sum, f) => sum + (f.dineInCapacity || 0), 0);

  const areas = [...new Set(targetFacilities.map(f => f.area))];

  res.json({
    status: "RADAR_ONLINE",
    meshNode: city && city.toLowerCase() !== 'all' ? `${city.toUpperCase()}-SURVEILLANCE-NODE-01` : "NATIONWIDE-SURVEILLANCE-NODE-01",
    totalFacilitiesTracked: targetFacilities.length,
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
 * Returns all facilities or filter by area and/or city
 */
app.get('/api/facilities', (req, res) => {
  const { area, city } = req.query;
  let results = facilities;
  if (city && city.toLowerCase() !== 'all') {
    results = results.filter(f => f.city && f.city.toLowerCase() === city.toLowerCase());
  }
  if (area) {
    results = results.filter(f => f.area.toLowerCase() === area.toLowerCase());
  }
  res.json(results);
});


/**
 * GET /api/facilities/:id
 * Returns single facility by id or code
 */
app.get('/api/facilities/:id', (req, res) => {
  const facility = facilities.find(f => f.id === req.params.id || f.facilityCode === req.params.id);
  if (!facility) {
    return res.status(404).json({ success: false, error: 'Facility not found' });
  }
  res.json(facility);
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
  // Score each entry using string-similarity, aliases, and keyword heuristics
  const scored = entries.map(item => {
    const brandName = item.brand.name;
    const brandLower = brandName.toLowerCase();
    const aliases = (item.brand.aliases || []).map(a => a.toLowerCase());
    const candidateNames = [brandLower, ...aliases, item.facility.facilityName.toLowerCase()];

    let maxEntryScore = 0;
    let bestMethod = 'fuzzy';

    for (const cand of candidateNames) {
      if (queryLower === cand) {
        maxEntryScore = 1.0;
        bestMethod = 'exact';
        break;
      }

      const dice = stringSimilarity.compareTwoStrings(queryLower, cand);
      let sub = 0;
      if (cand.includes(queryLower) || queryLower.includes(cand)) {
        const minLen = Math.min(queryLower.length, cand.length);
        const maxLen = Math.max(queryLower.length, cand.length);
        sub = 0.70 + 0.28 * (minLen / maxLen);
      }

      const qTokens = queryLower.split(/[\s,.-]+/).filter(t => t.length > 2);
      const cTokens = cand.split(/[\s,.-]+/).filter(t => t.length > 2);
      let tok = 0;
      if (qTokens.length > 0 && cTokens.length > 0) {
        const matchedTokens = qTokens.filter(qt =>
          cTokens.some(ct => ct.includes(qt) || qt.includes(ct) || stringSimilarity.compareTwoStrings(qt, ct) > 0.7)
        );
        if (matchedTokens.length > 0) {
          tok = 0.50 + 0.45 * (matchedTokens.length / Math.max(qTokens.length, cTokens.length));
        }
      }

      const candFinal = Math.max(dice, sub, tok);
      if (candFinal > maxEntryScore) {
        maxEntryScore = candFinal;
        bestMethod = candFinal === sub ? 'substring' : candFinal === tok ? 'token' : 'fuzzy';
      }
    }

    return {
      ...item,
      score: maxEntryScore,
      matchMethod: bestMethod
    };
  });

  // Sort by highest matching score
  scored.sort((a, b) => b.score - a.score);

  const bestMatch = scored[0];

  // If match confidence is too low, return not found with nearest suggestions
  if (!bestMatch || bestMatch.score < 0.30) {
    const suggestions = scored.slice(0, 4).map(s => ({
      name: s.brand.name,
      area: s.facility.area,
      cuisine: s.brand.cuisine
    }));

    return res.status(404).json({
      success: false,
      message: `No matching brand found for "${query}" in nationwide surveillance radar.`,
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
    isVirtual: b.isVirtual !== undefined ? b.isVirtual : b.virtual,
    priceTier: b.priceTier,
    platforms: b.platforms,
    platformRating: b.platformRating,
    prepStation: b.prepStation || b.prepBay,
    prepBay: b.prepBay || b.prepStation,
    packagingTag: b.packagingTag,
    claimedAddress: b.claimedAddress,
    aliases: b.aliases || [],
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
      isVirtual: brand.isVirtual !== undefined ? brand.isVirtual : brand.virtual,
      priceTier: brand.priceTier,
      platforms: brand.platforms,
      platformRating: brand.platformRating,
      prepStation: brand.prepStation || brand.prepBay,
      prepBay: brand.prepBay || brand.prepStation,
      packagingTag: brand.packagingTag,
      claimedAddress: brand.claimedAddress,
      aliases: brand.aliases || []
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
      operator: facility.operator || 'Independent Commercial Kitchen',
      registeredBays: facility.registeredBays || [],
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
