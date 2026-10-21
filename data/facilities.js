/**
 * Physical kitchen facilities and brand registry in Lagos, Nigeria.
 * Includes dense multi-tenant commercial cloud kitchens (4 to 8 virtual brands)
 * and verified authentic brick-and-mortar restaurants (Mega Chicken, The Place, Bukka Hut, etc.).
 */

const facilities = [
  // ==========================================
  // 1. CLOUDBITE LOGISTICS HUB - LEKKI (7 Virtual Brands)
  // ==========================================
  {
    id: "fac-lekki-01",
    facilityCode: "LOS-LEK-09",
    facilityName: "CloudBite Logistics Hub - Unit LK-09",
    operator: "CloudBite Hub Logistics West Africa Ltd",
    registeredBays: [
      "Bay 3B - Griddle Section 1 & 2",
      "Bay 3B - Dual Commercial Fryer Vats",
      "Bay 3B - Heavy Stockpot Boil Station",
      "Bay 3B - Cold Salad & Sushi Assembly Counter"
    ],
    address: "Plot 14 Admiralty Way, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    city: "lagos",
    coordinates: { lat: 6.4474, lng: 3.4735 },
    facilityType: "Multi-Bay Industrial Dark Kitchen Complex",
    ghostIndexScore: 96,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "7 distinct virtual brands operating inside a single 40m² prep unit with shared frying vats and rider-only dispatch window.",
    inspectionStatus: "Sanitary Notice Issued - Overcrowded Commercial Extraction (LSSC #LK-9021)",
    sanitationGrade: "C",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-10-02",
    regulatoryBody: "Lagos State Safety Commission & NAFDAC",
    activePermits: "Commercial Commissary Permit #LSSC-2024-8841",
    sharedExtraction: true,
    sharedEquipment: ["Frymaster Commercial Vat #1", "Garland 6-Burner Flat Top", "Single Walk-in Chiller Bay B"],
    brands: [
      {
        name: "Midnight Burger Lab",
        aliases: ["Midnight Burger", "Midnight Burger Lab Lekki", "Burger Lab"],
        cuisine: "Gourmet Smashed Burgers & Truffle Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.7 ★ (3,100+ orders)",
        prepBay: "Bay 3B - Griddle Section 1",
        prepStation: "Bay 3B - Griddle Section 1",
        packagingTag: "Generic kraft burger box with glossy vinyl sticker",
        claimedAddress: "Plot 14 Admiralty Way, Suite 101, Lekki"
      },
      {
        name: "Firefly Wings & Ribs",
        aliases: ["Firefly Wings", "Firefly Ribs", "Firefly Lagos"],
        cuisine: "Glazed Buffalo Wings & Smoked Pork Ribs",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.5 ★ (1,850+ orders)",
        prepBay: "Bay 3B - Shared Fryer Vat 2",
        prepStation: "Bay 3B - Shared Fryer Vat 2",
        packagingTag: "Foil-lined paper pouch, custom rubber stamped",
        claimedAddress: "Plot 14 Admiralty Way, Lekki Phase 1"
      },
      {
        name: "Tokyo Roll Express",
        aliases: ["Tokyo Roll", "Tokyo Sushi Express Lekki"],
        cuisine: "Maki Rolls, Nigiri & Bento Boxes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.4 ★ (920+ orders)",
        prepBay: "Bay 3B - Cold Assembly Counter B",
        prepStation: "Bay 3B - Cold Assembly Counter B",
        packagingTag: "Clear plastic bento clamshell",
        claimedAddress: "Plot 14 Admiralty Way, Unit 4B, Lekki"
      },
      {
        name: "Mama Eka Bowlz",
        aliases: ["Mama Eka", "Mama Eka Bowls", "Mama Eka Jollof"],
        cuisine: "Nigerian Native Soups, Pounded Yam & Party Rice",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (4,400+ orders)",
        prepBay: "Bay 3B - Heavy Stockpot Burner 3",
        prepStation: "Bay 3B - Heavy Stockpot Burner 3",
        packagingTag: "Plastic microwave soup tub with branded paper collar",
        claimedAddress: "Plot 14 Admiralty Way, Lekki"
      },
      {
        name: "KetoCrush Kitchen",
        aliases: ["KetoCrush", "Keto Crush Lekki"],
        cuisine: "Low-Carb Bowls, Avocado Salads & Cauliflower Rice",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.3 ★ (760+ orders)",
        prepBay: "Bay 3B - Cold Salad Station",
        prepStation: "Bay 3B - Cold Salad Station",
        packagingTag: "Biodegradable sugarcane bowl",
        claimedAddress: "Plot 14 Admiralty Way, 2nd Floor, Lekki"
      },
      {
        name: "Taco Fiesta Nights",
        aliases: ["Taco Fiesta", "Taco Fiesta Lagos"],
        cuisine: "Baja Crispy Fish Tacos & Beef Birria",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Glovo"],
        platformRating: "4.2 ★ (1,150+ orders)",
        prepBay: "Bay 3B - Griddle Section 2",
        prepStation: "Bay 3B - Griddle Section 2",
        packagingTag: "Corrugated taco holder & greaseproof wrap",
        claimedAddress: "Plot 14 Admiralty Way, Lekki Phase 1"
      },
      {
        name: "Smashville Crispy Chicken",
        aliases: ["Smashville Chicken", "Smashville Hot Chicken Lekki"],
        cuisine: "Nashville Hot Chicken Sandwiches & Waffles",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.8 ★ (5,200+ orders)",
        prepBay: "Bay 3B - Shared Fryer Vat 1",
        prepStation: "Bay 3B - Shared Fryer Vat 1",
        packagingTag: "Checkerboard waxed paper in brown carrier",
        claimedAddress: "Plot 14 Admiralty Way, Shop 9, Lekki"
      }
    ]
  },

  // ==========================================
  // 2. APEX CULINARY WORKS - VICTORIA ISLAND (5 Virtual Brands)
  // ==========================================
  {
    id: "fac-vi-01",
    facilityCode: "LOS-VI-02",
    facilityName: "Apex Culinary Works - Subdivided Pod VI-02",
    operator: "Apex Culinary Pods Nigeria Ltd",
    registeredBays: [
      "Station A - Central Pasta Range & Char-Broiler",
      "Station B - High-Pressure Jet Wok Burner",
      "Station C - Waffle Iron Bay",
      "Station D - Cold Press Juicing Table"
    ],
    address: "22 Adeola Odeku Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4281, lng: 3.4219 },
    facilityType: "Subdivided Industrial Ghost Kitchen Pod",
    ghostIndexScore: 89,
    riskLevel: "HIGH RISK PHANTOM INCUBATOR",
    riskSummary: "5 international-concept virtual brands sharing common dishwashing sinks and single dispatch counter without front-of-house signage.",
    inspectionStatus: "Under Regulatory Review - Shared Extraction Hood Compliance (LSSC #VI-4402)",
    sanitationGrade: "B-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-18",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Multi-Brand Virtual Kitchen Authorization #VI-9921",
    sharedExtraction: true,
    sharedEquipment: ["Rational Combi Oven 10-Tray", "Shared Pasta Boiler", "Single Dishwashing Sump"],
    brands: [
      {
        name: "Pasta Bella Milano",
        aliases: ["Pasta Bella", "Bella Milano Pasta VI"],
        cuisine: "Artisan Fresh Pastas, Truffle Rigatoni & Lasagnas",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (2,100+ orders)",
        prepBay: "Station A - Central Pasta Range",
        prepStation: "Station A - Central Pasta Range",
        packagingTag: "Italian tricolour embossed thermal carton",
        claimedAddress: "22 Adeola Odeku Street, Suite 4A, VI"
      },
      {
        name: "The Wok Legend",
        aliases: ["Wok Legend", "Wok Legend VI"],
        cuisine: "Sichuan & Cantonese Stir-Fried Noodles & Dumplings",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (3,700+ orders)",
        prepBay: "Station B - High-Pressure Jet Wok Burner",
        prepStation: "Station B - High-Pressure Jet Wok Burner",
        packagingTag: "Classic Chinese wire-handle takeaway pail",
        claimedAddress: "22 Adeola Odeku St, Victoria Island"
      },
      {
        name: "Sweet Tooth Waffle Factory",
        aliases: ["Sweet Tooth Waffles", "Waffle Factory VI"],
        cuisine: "Belgian Loaded Waffles, Churros & Freakshakes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.4 ★ (1,400+ orders)",
        prepBay: "Station C - Waffle Iron Bay",
        prepStation: "Station C - Waffle Iron Bay",
        packagingTag: "Pink branded cardboard box",
        claimedAddress: "22 Adeola Odeku St, VI"
      },
      {
        name: "Lagos Island Seafood Shack",
        aliases: ["Island Seafood Shack", "Seafood Shack VI"],
        cuisine: "Spicy Garlic Jumbo Prawns, Grilled Croaker & Chips",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Glovo", "Chowdeck"],
        platformRating: "4.3 ★ (890+ orders)",
        prepBay: "Station A - Char-Broiler",
        prepStation: "Station A - Char-Broiler",
        packagingTag: "Heavy aluminium foil tray with cardboard lid",
        claimedAddress: "22 Adeola Odeku St, Penthouse Prep, VI"
      },
      {
        name: "Green Detox Bar",
        aliases: ["Green Detox", "Detox Bar VI"],
        cuisine: "Cold-Pressed Juices, Acai Bowls & Wellness Shots",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.7 ★ (1,600+ orders)",
        prepBay: "Station D - Masticating Juicer Table",
        prepStation: "Station D - Masticating Juicer Table",
        packagingTag: "Clear PET bottles with minimalist green stickers",
        claimedAddress: "22 Adeola Odeku St, VI"
      }
    ]
  },

  // ==========================================
  // 3. METRO KITCHEN LABS - IKEJA GRA (6 Virtual Brands)
  // ==========================================
  {
    id: "fac-ikeja-01",
    facilityCode: "LOS-IKJ-07",
    facilityName: "Metro Kitchen Labs - Ikeja Hub",
    operator: "Metro Culinary Hubs Operating Co",
    registeredBays: [
      "Rotisserie Spindles 1 & 2",
      "Flat Griddle East Side",
      "Simmer Range Station 4",
      "Pitco 4-Bay Commercial Fryer"
    ],
    address: "7 Isaac John Street, Ikeja GRA, Lagos",
    area: "Ikeja GRA",
    city: "lagos",
    coordinates: { lat: 6.5882, lng: 3.3587 },
    facilityType: "Commercial Dark Kitchen Basement Facility",
    ghostIndexScore: 84,
    riskLevel: "HIGH RISK VIRTUAL CLUSTER",
    riskSummary: "6 virtual delivery storefronts sharing a single basement extraction duct with dedicated rider pickup ramp.",
    inspectionStatus: "Conditional Clearance - Ventilation Retrofit Mandated (LSSC #IK-1108)",
    sanitationGrade: "B",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-08-29",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Shared Commissary Kitchen Permit #IK-7742",
    sharedExtraction: true,
    sharedEquipment: ["Shawarma Vertical Broiler 2x", "Pitco 4-Bay Fryer", "High-Speed Pizza Deck"],
    brands: [
      {
        name: "King Shawarma & Grills",
        aliases: ["King Shawarma", "King Shawarma Ikeja"],
        cuisine: "Lebanese Beef & Chicken Shawarmas, Kebab Plates",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.7 ★ (6,800+ orders)",
        prepBay: "Rotisserie Spindles 1 & 2",
        prepStation: "Rotisserie Spindles 1 & 2",
        packagingTag: "Foil-wrapped paper roll with plastic carry pouch",
        claimedAddress: "7 Isaac John Street, Ikeja GRA"
      },
      {
        name: "Philly Cheesesteak Central",
        aliases: ["Philly Cheesesteak", "Cheesesteak Central"],
        cuisine: "Shaved Ribeye Cheesesteaks & Seasoned Curly Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.3 ★ (1,200+ orders)",
        prepBay: "Flat Griddle East Side",
        prepStation: "Flat Griddle East Side",
        packagingTag: "Sub wrapper paper inside kraft box",
        claimedAddress: "7 Isaac John St, Ikeja GRA"
      },
      {
        name: "Calabar Pot Delicacies",
        aliases: ["Calabar Pot", "Calabar Delicacies Ikeja"],
        cuisine: "Authentic Edikang Ikong, Afang & Fisherman Soups",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (2,900+ orders)",
        prepBay: "Simmer Range Station 4",
        prepStation: "Simmer Range Station 4",
        packagingTag: "Leak-proof thermo containers",
        claimedAddress: "7 Isaac John St, Suite 2, Ikeja"
      },
      {
        name: "Wrap & Roll Burritos",
        aliases: ["Wrap & Roll", "Wrap and Roll Burritos"],
        cuisine: "Mission-Style Stuffed Burritos, Quesadillas & Nachos",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Glovo"],
        platformRating: "4.2 ★ (950+ orders)",
        prepBay: "Tortilla Press Station",
        prepStation: "Tortilla Press Station",
        packagingTag: "Heavy aluminium wrap inside branded tote",
        claimedAddress: "7 Isaac John St, Ikeja"
      },
      {
        name: "Gourmet Donut District",
        aliases: ["Donut District", "Gourmet Donuts Ikeja"],
        cuisine: "Artisan Brioche Donuts, Boston Cream & Cold Brew",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.5 ★ (1,750+ orders)",
        prepBay: "Pastry Prep Corner",
        prepStation: "Pastry Prep Corner",
        packagingTag: "Pastel window carton box (holds 4-6)",
        claimedAddress: "7 Isaac John Street, Ikeja GRA"
      },
      {
        name: "Naija Smokey Jollof HQ",
        aliases: ["Naija Smokey Jollof", "Smokey Jollof HQ Ikeja"],
        cuisine: "Woodsmoke Party Jollof, Fried Plantain & Peppered Goat",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.8 ★ (8,100+ orders)",
        prepBay: "Cast-Iron Pot Range Bay",
        prepStation: "Cast-Iron Pot Range Bay",
        packagingTag: "Classic silver foil takeaway tray",
        claimedAddress: "7 Isaac John St, Ikeja GRA"
      }
    ]
  },

  // ==========================================
  // 4. OGUNLANA CULINARY COLLECTIVE - SURULERE (4 Virtual Brands)
  // ==========================================
  {
    id: "fac-surulere-01",
    facilityCode: "LOS-SRL-04",
    facilityName: "Ogunlana Culinary Collective",
    operator: "Surulere Local Culinary Collective",
    registeredBays: [
      "Outdoor Suya Grid #1",
      "Charcoal Grate #2",
      "Stockpot Burner Station A",
      "Open Air Deep Fryer"
    ],
    address: "88 Ogunlana Drive, Surulere, Lagos",
    area: "Surulere",
    city: "lagos",
    coordinates: { lat: 6.5029, lng: 3.3551 },
    facilityType: "Converted Residential Rear Garage & Annex",
    ghostIndexScore: 79,
    riskLevel: "HIGH RISK UNZONED FACILITY",
    riskSummary: "4 delivery-only street food and soup brands operating out of a retrofitted residential annex without commercial zoning.",
    inspectionStatus: "Sanitary Citation #SR-4419 - High-Pressure Gas Manifold Hazard",
    sanitationGrade: "C-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-07-14",
    regulatoryBody: "Lagos State Physical Planning & Safety Commission",
    activePermits: "Appealed Temporary Prep Permit #SR-091",
    sharedExtraction: false,
    sharedEquipment: ["Charcoal Suya Pit", "Dual Drum Pepper Soup Burners", "Open Air Fryer"],
    brands: [
      {
        name: "Suya Express 24/7",
        aliases: ["Suya Express", "Suya Express Surulere", "Suya 24/7"],
        cuisine: "Charcoal Grilled Beef, Ram & Chicken Suya with Masa",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (5,400+ orders)",
        prepBay: "Outdoor Suya Grid #1",
        prepStation: "Outdoor Suya Grid #1",
        packagingTag: "Newspaper lined with brown butcher wrap",
        claimedAddress: "88 Ogunlana Drive, Surulere"
      },
      {
        name: "Bole & Fish Zone",
        aliases: ["Bole & Fish", "Bole and Fish Zone"],
        cuisine: "Port Harcourt Roasted Plantains, Mackerel & Pepper Sauce",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.4 ★ (2,100+ orders)",
        prepBay: "Charcoal Grate #2",
        prepStation: "Charcoal Grate #2",
        packagingTag: "Perforated foil food tray",
        claimedAddress: "88 Ogunlana Dr, Surulere"
      },
      {
        name: "Pepper Soup Junction",
        aliases: ["Pepper Soup Junction Surulere"],
        cuisine: "Spicy Catfish, Goat Meat & Offal Pepper Soup",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.3 ★ (1,600+ orders)",
        prepBay: "Stockpot Burner Station A",
        prepStation: "Stockpot Burner Station A",
        packagingTag: "Plastic heat-sealed bucket",
        claimedAddress: "88 Ogunlana Drive, Annex A, Surulere"
      },
      {
        name: "Wings & Fries Alley",
        aliases: ["Wings & Fries", "Wings and Fries Alley"],
        cuisine: "Deep Fried Hot Wings, Loaded Cheesy Wedges",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Glovo"],
        platformRating: "4.1 ★ (890+ orders)",
        prepBay: "Open Fryer Vat",
        prepStation: "Open Fryer Vat",
        packagingTag: "Standard unbranded white cardboard box",
        claimedAddress: "88 Ogunlana Drive, Surulere"
      }
    ]
  },

  // ==========================================
  // 5. ALAGOMEJI COMMISSARY HUB - YABA (4 Virtual Brands)
  // ==========================================
  {
    id: "fac-yaba-01",
    facilityCode: "LOS-YAB-03",
    facilityName: "Alagomeji Shared Commissary Hub",
    operator: "Yaba Tech Culinary Co-working Hub",
    registeredBays: [
      "Prep Bench 1 - Sandwich Assembly",
      "Prep Bench 2 - Rice Warmers",
      "Wok Line Station 3",
      "Cold Press Table"
    ],
    address: "31 Herbert Macaulay Way, Alagomeji, Yaba, Lagos",
    area: "Yaba",
    city: "lagos",
    coordinates: { lat: 6.4969, lng: 3.3789 },
    facilityType: "Tech Corridor Shared Commissary Kitchen",
    ghostIndexScore: 73,
    riskLevel: "MODERATE RISK COMMISSARY",
    riskSummary: "4 student & tech targeted delivery brands co-located in shared culinary incubation hub with shared prep lines.",
    inspectionStatus: "Active Shared Kitchen Accreditation (LSSC #YB-601)",
    sanitationGrade: "B+",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-04",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Co-Cooking Facility License #YB-8820",
    sharedExtraction: true,
    sharedEquipment: ["Induction Hob Battery", "Rapid Steamers", "Blast Chiller"],
    brands: [
      {
        name: "Techie Bites Sandwiches",
        aliases: ["Techie Bites", "Techie Sandwiches Yaba"],
        cuisine: "Artisan Toasties, Club Sandwiches & Cold Wraps",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.5 ★ (2,300+ orders)",
        prepBay: "Prep Bench 1 - Sandwich Assembly",
        prepStation: "Prep Bench 1 - Sandwich Assembly",
        packagingTag: "Triangle sandwich wedge box with window",
        claimedAddress: "31 Herbert Macaulay Way, Yaba"
      },
      {
        name: "Student Budget Rice",
        aliases: ["Student Budget", "Budget Rice Yaba"],
        cuisine: "Value Fried Rice, Jollof & Quarter Chicken Portions",
        isVirtual: true,
        virtual: true,
        priceTier: "₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.2 ★ (4,900+ orders)",
        prepBay: "Prep Bench 2 - Rice Warmers",
        prepStation: "Prep Bench 2 - Rice Warmers",
        packagingTag: "Styrofoam takeaway clamshell",
        claimedAddress: "31 Herbert Macaulay Way, Suite B, Yaba"
      },
      {
        name: "Noodle Box 360",
        aliases: ["Noodle Box", "Noodle Box Yaba"],
        cuisine: "Stir-Fried Indomie Noodles, Boiled Eggs & Sausage Mix",
        isVirtual: true,
        virtual: true,
        priceTier: "₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (6,300+ orders)",
        prepBay: "Wok Line Station 3",
        prepStation: "Wok Line Station 3",
        packagingTag: "Round cardboard noodle tub with chopsticks",
        claimedAddress: "31 Herbert Macaulay Way, Yaba"
      },
      {
        name: "Juice Box Yaba",
        aliases: ["Juice Box", "Juice Box Herbert Macaulay"],
        cuisine: "Cold Fresh Citrus, Pineapple Ginger & Beetroot Shots",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.4 ★ (1,100+ orders)",
        prepBay: "Cold Press Table",
        prepStation: "Cold Press Table",
        packagingTag: "Clear plastic cups with heat sealed plastic lids",
        claimedAddress: "31 Herbert Macaulay Way, Unit 1, Yaba"
      }
    ]
  },

  // ==========================================
  // 6. THE DARK MATRIX HUB - SABO YABA (8 Co-Located Ghost Brands!)
  // ==========================================
  {
    id: "fac-yaba-dark-02",
    facilityCode: "LOS-YAB-08",
    facilityName: "The Dark Matrix Hub - Yaba Commissary Bay 7",
    operator: "Phantom Cloud Kitchens West Africa Ltd",
    registeredBays: [
      "Bay 7 - Triple Wok High-Pressure Jet Array",
      "Bay 7 - Dual Pitco Pressure Fryers",
      "Bay 7 - Flat Smasher Griddle Counter",
      "Bay 7 - Central Cold Assembly & Boba Sealing Station",
      "Rider Back-Alley Dispatch Hatch 4"
    ],
    address: "12 Commercial Avenue, Sabo, Yaba, Lagos",
    area: "Yaba",
    city: "lagos",
    coordinates: { lat: 6.5085, lng: 3.3762 },
    facilityType: "High-Density Multi-Tenant Cloud Commissary",
    ghostIndexScore: 98,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "8 virtual delivery brands sharing one 45sqm windowless commissary prep floor with extreme fryer clustering and rider-only alleyway hatch.",
    inspectionStatus: "Multiple Safety Citations #YB-9910 - Inadequate Emergency Ventilation & Extraction",
    sanitationGrade: "C-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-28",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Conditional Multi-Brand Preparation License #YB-7701",
    sharedExtraction: true,
    sharedEquipment: ["Triple Jet Wok Array", "Pitco 4-Bay Frying Bank", "Double Smasher Griddle", "Blast Chiller"],
    brands: [
      {
        name: "Midnight Noodle Syndicate",
        aliases: ["Noodle Syndicate", "Midnight Noodle Sabo"],
        cuisine: "Spicy Korean Ramen, Indomie Mashups & Crispy Wontons",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo", "Bolt Food"],
        platformRating: "4.6 ★ (4,100+ orders)",
        prepBay: "Bay 7 - Wok Jet 1",
        prepStation: "Bay 7 - Wok Jet 1",
        packagingTag: "Sealed noodle bowl with disposable chopsticks",
        claimedAddress: "12 Commercial Avenue, Sabo Yaba"
      },
      {
        name: "Ghost Smash Burgers",
        aliases: ["Ghost Smash", "Ghost Burgers Yaba"],
        cuisine: "Triple Wagyu-Style Smashed Beef & Onion Rings",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.7 ★ (3,500+ orders)",
        prepBay: "Bay 7 - Flat Smasher Griddle Counter",
        prepStation: "Bay 7 - Flat Smasher Griddle Counter",
        packagingTag: "Foil-lined paper burger wrap with black seal",
        claimedAddress: "12 Commercial Avenue, Suite 10, Yaba"
      },
      {
        name: "Phantom Wings 247",
        aliases: ["Phantom Wings", "Phantom Wings Sabo"],
        cuisine: "Mango Habanero Wings & Loaded Cheddar Wedges",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Glovo"],
        platformRating: "4.3 ★ (2,100+ orders)",
        prepBay: "Bay 7 - Shared Pressure Fryer 1",
        prepStation: "Bay 7 - Shared Pressure Fryer 1",
        packagingTag: "Vented kraft chicken carton",
        claimedAddress: "12 Commercial Ave, Yaba"
      },
      {
        name: "Tokyo Tempura Cloud",
        aliases: ["Tokyo Tempura", "Tempura Cloud Yaba"],
        cuisine: "Crispy Prawn Tempura, Gyoza & Katsu Don Bowls",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.4 ★ (880+ orders)",
        prepBay: "Bay 7 - Shared Pressure Fryer 2",
        prepStation: "Bay 7 - Shared Pressure Fryer 2",
        packagingTag: "Black bento container with clear dome",
        claimedAddress: "12 Commercial Avenue, Sabo"
      },
      {
        name: "Chow Junkie Burritos",
        aliases: ["Chow Junkie", "Chow Junkie Burritos Yaba"],
        cuisine: "Giant Loaded Beef Barbacoa Burritos & Cheesy Quesadillas",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.5 ★ (1,700+ orders)",
        prepBay: "Bay 7 - Assembly Counter",
        prepStation: "Bay 7 - Assembly Counter",
        packagingTag: "Heavy gold foil wrap inside kraft tote",
        claimedAddress: "12 Commercial Ave, Yaba"
      },
      {
        name: "Lagos Mac & Cheese Co",
        aliases: ["Lagos Mac and Cheese", "Mac & Cheese Co"],
        cuisine: "Four-Cheese Baked Macaroni Bowls with Crispy Bacon",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Glovo", "Chowdeck"],
        platformRating: "4.4 ★ (1,300+ orders)",
        prepBay: "Bay 7 - Salamander Broiler Station",
        prepStation: "Bay 7 - Salamander Broiler Station",
        packagingTag: "Circular ovenproof foil pan with paper lid",
        claimedAddress: "12 Commercial Ave, Sabo Yaba"
      },
      {
        name: "Boba Cloud Tea Lab",
        aliases: ["Boba Cloud", "Boba Tea Lab Yaba"],
        cuisine: "Brown Sugar Milk Tea, Taro Frappes & Fruit Popping Boba",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.8 ★ (3,900+ orders)",
        prepBay: "Bay 7 - Boba Sealing Machine Bench",
        prepStation: "Bay 7 - Boba Sealing Machine Bench",
        packagingTag: "Custom sealed 700ml plastic cup with fat straw",
        claimedAddress: "12 Commercial Avenue, Yaba"
      },
      {
        name: "Naija Frypot Kitchen",
        aliases: ["Naija Frypot", "Frypot Kitchen Sabo"],
        cuisine: "Crispy Fried Turkey, Yam Fries, Fried Dodo & Hot Pepper Dip",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (5,600+ orders)",
        prepBay: "Bay 7 - Open Frying Vat 3",
        prepStation: "Bay 7 - Open Frying Vat 3",
        packagingTag: "Wax paper lined box with plastic dipping cups",
        claimedAddress: "12 Commercial Ave, Sabo, Yaba"
      }
    ]
  },

  // ==========================================
  // 7. KOREDE INDUSTRIAL COMMISSARY - IKEJA (7 Co-Located Ghost Brands!)
  // ==========================================
  {
    id: "fac-ikeja-dark-03",
    facilityCode: "LOS-IKJ-09",
    facilityName: "Korede Industrial Commissary - Unit 4B",
    operator: "OmniKitchens Nigeria Operating Ltd",
    registeredBays: [
      "Industrial Bay 4B - Smoker & Rotisserie Bay",
      "Industrial Bay 4B - Heavy Duty Tender Fryers",
      "Industrial Bay 4B - Pizza Deck & Churro Fryers",
      "Rider Loading Bay Ramp"
    ],
    address: "5 Wemco Road, Ogba Industrial Estate, Ikeja, Lagos",
    area: "Ikeja",
    city: "lagos",
    coordinates: { lat: 6.6341, lng: 3.3412 },
    facilityType: "Subdivided Industrial Cloud Park",
    ghostIndexScore: 95,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "7 distinct virtual brands operating inside retrofitted warehouse bay with shared grease traps and delivery rider queues.",
    inspectionStatus: "Sanitary Notice Issued - Overheated Hood Extraction (LSSC #IK-8819)",
    sanitationGrade: "C",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-10-04",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Commercial Commissary Permit #OGB-2024-119",
    sharedExtraction: true,
    sharedEquipment: ["Southern Pride Commercial Smoker", "Triple Pressure Fryer", "Dual Pizza Oven"],
    brands: [
      {
        name: "Ogba Smoked Ribs & BBQ",
        aliases: ["Ogba Smoked Ribs", "Ogba BBQ"],
        cuisine: "Slow Smoked Beef Ribs, Brisket & BBQ Baked Beans",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.6 ★ (2,800+ orders)",
        prepBay: "Industrial Bay 4B - Smoker Bay",
        prepStation: "Industrial Bay 4B - Smoker Bay",
        packagingTag: "Foil-wrapped paper in kraft box",
        claimedAddress: "5 Wemco Road, Ogba, Ikeja"
      },
      {
        name: "Firehouse Crispy Tenders",
        aliases: ["Firehouse Tenders", "Crispy Tenders Ikeja"],
        cuisine: "Giant Buttermilk Fried Chicken Tenders & Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.7 ★ (4,900+ orders)",
        prepBay: "Industrial Bay 4B - Tender Fryer 1",
        prepStation: "Industrial Bay 4B - Tender Fryer 1",
        packagingTag: "Corrugated vented chicken box",
        claimedAddress: "5 Wemco Road, Suite 2B, Ikeja"
      },
      {
        name: "The Loaded Poutine Co",
        aliases: ["Loaded Poutine", "Poutine Co Ikeja"],
        cuisine: "Cheesy Squeaky Curd Poutine, Crispy Bacon & Brown Gravy",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.3 ★ (790+ orders)",
        prepBay: "Industrial Bay 4B - Fry Station",
        prepStation: "Industrial Bay 4B - Fry Station",
        packagingTag: "Heavy biodegradable bowl with sauce pot",
        claimedAddress: "5 Wemco Road, Ogba"
      },
      {
        name: "Naija Pepper Pepper Soup HQ",
        aliases: ["Naija Pepper Soup HQ", "Pepper Soup HQ Ogba"],
        cuisine: "Fiery Catfish & Goat Meat Pepper Soup with Boiled Yam",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (3,100+ orders)",
        prepBay: "Industrial Bay 4B - Stockpot Burner 2",
        prepStation: "Industrial Bay 4B - Stockpot Burner 2",
        packagingTag: "Heat-sealed leakproof tub",
        claimedAddress: "5 Wemco Road, Ikeja"
      },
      {
        name: "Sizzling Steak & Sub",
        aliases: ["Sizzling Steak", "Steak & Sub Ikeja"],
        cuisine: "Philly Ribeye Subs, Loaded Garlic Fries & Onion Rings",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.4 ★ (1,500+ orders)",
        prepBay: "Industrial Bay 4B - Flat Top Griddle",
        prepStation: "Industrial Bay 4B - Flat Top Griddle",
        packagingTag: "Sub roll carton with greaseproof wrap",
        claimedAddress: "5 Wemco Road, Ikeja"
      },
      {
        name: "Wrap God Shawarma",
        aliases: ["Wrap God", "Wrap God Shawarma Ikeja"],
        cuisine: "Jumbo Lebanese Shawarmas with Double Sausage & Suya Spice",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Bolt Food", "Chowdeck", "Glovo"],
        platformRating: "4.6 ★ (6,700+ orders)",
        prepBay: "Industrial Bay 4B - Vertical Rotisserie",
        prepStation: "Industrial Bay 4B - Vertical Rotisserie",
        packagingTag: "Double foil wrap with paper collar",
        claimedAddress: "5 Wemco Road, Ogba, Ikeja"
      },
      {
        name: "Sugar Rush Churro Bar",
        aliases: ["Sugar Rush Churros", "Churro Bar Ikeja"],
        cuisine: "Golden Cinnamon Sugar Churros & Warm Nutella Dips",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.8 ★ (2,400+ orders)",
        prepBay: "Industrial Bay 4B - Churro Extruder Station",
        prepStation: "Industrial Bay 4B - Churro Extruder Station",
        packagingTag: "Paper cone with dipping sauce compartment",
        claimedAddress: "5 Wemco Road, Ikeja"
      }
    ]
  },

  // ==========================================
  // 8. KURAMO DARK POD - VICTORIA ISLAND (6 Virtual Brands)
  // ==========================================
  {
    id: "fac-vi-dark-03",
    facilityCode: "LOS-VI-10",
    facilityName: "Kuramo Dark Pod - Commissary Unit 10",
    operator: "Urban Commissary Pods Lagos Ltd",
    registeredBays: [
      "Modular Pod 10 - Seafood & Taco Assembly",
      "Modular Pod 10 - Pasta Boiler & Induction Line",
      "Modular Pod 10 - Char-Grill & Slider Bay",
      "Dedicated Courier Window"
    ],
    address: "Plot 10B Kuramo Waters Close, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4235, lng: 3.4352 },
    facilityType: "Subdivided Coastal Dark Kitchen Pod",
    ghostIndexScore: 92,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "6 virtual delivery brands cooked in an annex behind Kuramo waters with single dispatch pass-through and shared hood extraction.",
    inspectionStatus: "Conditional License - Shared Extraction Compliance Review (LSSC #VI-7703)",
    sanitationGrade: "B-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-12",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Coastal Multi-Brand Kitchen Permit #VI-4491",
    sharedExtraction: true,
    sharedEquipment: ["Induction Battery Array", "Commercial Char-Broiler", "Single Walk-in Chiller"],
    brands: [
      {
        name: "Baja Fish Taco Syndicate",
        aliases: ["Baja Fish Taco", "Taco Syndicate VI"],
        cuisine: "Crispy Red Snapper Tacos with Chipotle Crema & Slaw",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (1,800+ orders)",
        prepBay: "Modular Pod 10 - Taco Assembly Bench",
        prepStation: "Modular Pod 10 - Taco Assembly Bench",
        packagingTag: "Corrugated taco slider tray",
        claimedAddress: "Plot 10B Kuramo Waters Close, VI"
      },
      {
        name: "Truffle & Parmesan Pasta Club",
        aliases: ["Truffle & Parmesan", "Truffle Pasta Club VI"],
        cuisine: "Creamy Truffle Tagliatelle, Carbonara & Garlic Bread",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.7 ★ (2,600+ orders)",
        prepBay: "Modular Pod 10 - Pasta Boiler",
        prepStation: "Modular Pod 10 - Pasta Boiler",
        packagingTag: "Heavy insulated gold foil bowl",
        claimedAddress: "Plot 10B Kuramo Waters, VI"
      },
      {
        name: "Acai Superfood Bowlz",
        aliases: ["Acai Superfood", "Acai Bowlz VI"],
        cuisine: "Organic Brazilian Acai, Chia Seeds & Peanut Butter Drizzle",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.6 ★ (1,100+ orders)",
        prepBay: "Modular Pod 10 - Cold Acai Counter",
        prepStation: "Modular Pod 10 - Cold Acai Counter",
        packagingTag: "Biodegradable coconut shell bowl with wooden spoon",
        claimedAddress: "Plot 10B Kuramo Waters Close, Victoria Island"
      },
      {
        name: "Smoked Duck & Wok Express",
        aliases: ["Smoked Duck Wok", "Duck & Wok VI"],
        cuisine: "Cantonese Roast Duck, Egg Fried Rice & Dim Sum",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Glovo", "Chowdeck"],
        platformRating: "4.4 ★ (920+ orders)",
        prepBay: "Modular Pod 10 - Induction Wok Range",
        prepStation: "Modular Pod 10 - Induction Wok Range",
        packagingTag: "Wire-handle pagoda takeout box",
        claimedAddress: "Plot 10B Kuramo Waters Close, VI"
      },
      {
        name: "Gourmet Slider Society",
        aliases: ["Slider Society", "Gourmet Sliders VI"],
        cuisine: "Trio Brioche Beef & Crispy Chicken Sliders with Truffle Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.6 ★ (2,100+ orders)",
        prepBay: "Modular Pod 10 - Char-Grill Bench",
        prepStation: "Modular Pod 10 - Char-Grill Bench",
        packagingTag: "Custom window box with 3 slider compartments",
        claimedAddress: "Plot 10B Kuramo Waters Close, VI"
      },
      {
        name: "Lagos Island Late Night Kebab",
        aliases: ["Late Night Kebab", "Island Kebab VI"],
        cuisine: "Spit-Roasted Lamb & Chicken Doner with Garlic Toum",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Glovo"],
        platformRating: "4.3 ★ (3,300+ orders)",
        prepBay: "Modular Pod 10 - Spit Rotisserie",
        prepStation: "Modular Pod 10 - Spit Rotisserie",
        packagingTag: "Heavy aluminium wrapper with sticker",
        claimedAddress: "Plot 10B Kuramo Waters, Victoria Island"
      }
    ]
  },

  // ==========================================
  // 9. MARYLAND EXPRESS COMMISSARY (2 Brands)
  // ==========================================
  {
    id: "fac-maryland-01",
    facilityCode: "LOS-MLD-01",
    facilityName: "Maryland Express Food Prep Unit",
    operator: "Maryland Quick Delivery Hubs Ltd",
    registeredBays: [
      "Smoker Station A",
      "Grill Station B",
      "Curbside Pickup Window"
    ],
    address: "14 Ikorodu Road, Maryland, Lagos",
    area: "Maryland",
    city: "lagos",
    coordinates: { lat: 6.5682, lng: 3.3671 },
    facilityType: "Dual-Brand Delivery Annex",
    ghostIndexScore: 46,
    riskLevel: "MODERATE RISK DUAL KITCHEN",
    riskSummary: "2 American comfort food delivery concepts cooked in shared kitchen space with curbside pickup window.",
    inspectionStatus: "Satisfactory Compliance - Standard Commercial License (LSSC #MD-2201)",
    sanitationGrade: "B",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-08-15",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Dual-Brand Commercial Delivery Permit #MD-3301",
    sharedExtraction: true,
    sharedEquipment: ["Southern Pride Commercial Smoker", "Charcoal Grill"],
    brands: [
      {
        name: "Smokey Ribs Shack",
        aliases: ["Smokey Ribs", "Ribs Shack Maryland"],
        cuisine: "Slow-Smoked Beef Brisket, Pork Ribs & BBQ Baked Beans",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Chowdeck"],
        platformRating: "4.5 ★ (1,900+ orders)",
        prepBay: "Smoker Station A",
        prepStation: "Smoker Station A",
        packagingTag: "Kraft paper lined catering box",
        claimedAddress: "14 Ikorodu Road, Maryland"
      },
      {
        name: "Burger Baron",
        aliases: ["Burger Baron Maryland"],
        cuisine: "Double Bacon Cheeseburgers, Onion Rings & Milkshakes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Bolt Food", "Glovo", "Chowdeck"],
        platformRating: "4.3 ★ (2,600+ orders)",
        prepBay: "Grill Station B",
        prepStation: "Grill Station B",
        packagingTag: "Foil-lined burger bag",
        claimedAddress: "14 Ikorodu Road, Maryland"
      }
    ]
  },

  // ==========================================
  // 10. MEGA CHICKEN IKEJA (Verified Authentic Flagship)
  // ==========================================
  {
    id: "fac-ikeja-mega-01",
    facilityCode: "LOS-IKJ-MEGA-01",
    facilityName: "Mega Chicken Fast Food & Restaurant - Ikeja Central",
    operator: "Mega Chicken Restaurants Ltd",
    registeredBays: [
      "Ground Floor Main Hot Buffet Brigade Line",
      "First Floor Chinese & Continental Kitchen Bay",
      "Dedicated Mega Bakery & Pastry Department",
      "Executive Banquet Preparation Kitchen"
    ],
    address: "Plot 1 Agidingbi Road, Opposite Elephant House, Ikeja, Lagos",
    area: "Ikeja",
    city: "lagos",
    coordinates: { lat: 6.6212, lng: 3.3524 },
    facilityType: "Multi-Storey Authentic Flagship Restaurant & Bakery Complex",
    ghostIndexScore: 2,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Iconic authentic culinary landmark with 250 guest seats across 2 floors, verified on-site executive chef brigade, open kitchen counters, and full walk-in inspection clearance.",
    inspectionStatus: "Gold Seal Cleared - Pristine Hygiene Distinction (LSSC #IK-MEGA-01)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 250,
    lastInspected: "2024-10-18",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Full Hospitality & Commercial Food Processing License #LGH-2024-8802",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Mega Chicken Ikeja",
        aliases: ["Mega Chicken", "MegaChicken", "Mega Chicken Fast Food", "Mega Chicken Restaurant", "Mega Chicken Agidingbi"],
        cuisine: "Nigerian Party Jollof, Fried Chicken, Chinese Special Fried Rice & Pastries",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "Direct Takeaway Counter"],
        platformRating: "4.8 ★ (28,000+ verified customer visits)",
        prepBay: "Ground Floor Main Hot Buffet Brigade Line",
        prepStation: "Ground Floor Main Hot Buffet Brigade Line",
        packagingTag: "Mega Chicken custom red & yellow branded insulated thermal carry-boxes",
        claimedAddress: "Plot 1 Agidingbi Road, Opposite Elephant House, Ikeja, Lagos"
      }
    ]
  },

  // ==========================================
  // 11. MEGA CHICKEN LEKKI (Verified Authentic Flagship)
  // ==========================================
  {
    id: "fac-lekki-mega-02",
    facilityCode: "LOS-LEK-MEGA-02",
    facilityName: "Mega Chicken Flagship Complex - Lekki Expressway",
    operator: "Mega Chicken Restaurants Ltd",
    registeredBays: [
      "Ground Floor Fast Food & Rice Line",
      "Terrace Continental & Seafood Brigade Line",
      "Mega Bakery & Artisanal Ice Cream Section"
    ],
    address: "Km 14 Lekki-Epe Expressway, Ikota First Gate, Lekki, Lagos",
    area: "Lekki",
    city: "lagos",
    coordinates: { lat: 6.4365, lng: 3.5358 },
    facilityType: "Mega Authentic Standalone Food Complex & Drive-Thru",
    ghostIndexScore: 3,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Massive 300-seat multi-concept dining establishment with dedicated on-site bakery, ice cream parlor, and open customer viewing counter.",
    inspectionStatus: "Grade A+ Health Certification - International Standard Food Prep (LSSC #LK-MEGA-02)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 300,
    lastInspected: "2024-10-15",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Health",
    activePermits: "Full Hospitality Commercial Catering Permit #LK-MEGA-8901",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Mega Chicken Lekki",
        aliases: ["Mega Chicken Ikota", "Mega Chicken Lekki Expressway", "Mega Chicken VGC"],
        cuisine: "Gourmet Rice Dishes, Crispy Broasted Poultry, Shawarma & Patisserie",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "Mega Drive-Thru"],
        platformRating: "4.9 ★ (34,000+ verified customer visits)",
        prepBay: "Executive Fast Food Brigade Bay",
        prepStation: "Executive Fast Food Brigade Bay",
        packagingTag: "Mega Chicken signature heavy insulated takeout boxes with tamper-evident seal",
        claimedAddress: "Km 14 Lekki-Epe Expressway, Ikota First Gate, Lekki, Lagos"
      }
    ]
  },

  // ==========================================
  // 12. THE PLACE RESTAURANT - VICTORIA ISLAND (Verified Authentic)
  // ==========================================
  {
    id: "fac-vi-place-01",
    facilityCode: "LOS-VI-PLACE-01",
    facilityName: "The Place Restaurant & Lounge - VI Flagship",
    operator: "The Place Hospitality Group (Smackers Ltd)",
    registeredBays: [
      "Central Kitchen Steam Counter Line",
      "Dedicated Asun & Charcoal Barbecue Pit",
      "Bar Lounge & Drink Dispense Station"
    ],
    address: "Plot 4A Adeola Odeku Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4296, lng: 3.4147 },
    facilityType: "Authentic Restaurant, Bar & Lounge Venue",
    ghostIndexScore: 4,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Premier authentic restaurant with 180 guest seats, bustling in-person lunch crowd, verified on-site chef brigade, and open serving counter.",
    inspectionStatus: "Clean Kitchen Standard Distinction (LSSC Grade A #VI-PLACE-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 180,
    lastInspected: "2024-10-08",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commercial Restaurant & Lounge License #VI-PLACE-4412",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "The Place Restaurant VI",
        aliases: ["The Place", "The Place Victoria Island", "The Place Adeola Odeku", "The Place Restaurant"],
        cuisine: "Signature Asun Jollof Rice, Grilled Catfish, Fried Yam, Plantain & Native Soups",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.7 ★ (22,000+ orders)",
        prepBay: "Central Kitchen Hot Range 1",
        prepStation: "Central Kitchen Hot Range 1",
        packagingTag: "The Place custom branded red paper carrier with heat-retaining containers",
        claimedAddress: "Plot 4A Adeola Odeku Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 13. THE PLACE RESTAURANT - LEKKI PHASE 1 (Verified Authentic)
  // ==========================================
  {
    id: "fac-lekki-place-02",
    facilityCode: "LOS-LEK-PLACE-02",
    facilityName: "The Place Restaurant & Bar - Lekki Phase 1",
    operator: "The Place Hospitality Group (Smackers Ltd)",
    registeredBays: [
      "Front Kitchen Steam Counter",
      "Commercial Charcoal Barbecue Pit",
      "Bar Lounge Station"
    ],
    address: "Plot 1 Block A9, Admiralty Way, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    city: "lagos",
    coordinates: { lat: 6.4468, lng: 3.4795 },
    facilityType: "Authentic Standalone Restaurant & Outdoor Lounge",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Full-service dining establishment with 140 seats along Admiralty Way, direct customer serving lines, and open grill pits.",
    inspectionStatus: "Full Hygiene Standard Accreditation (LSSC #LK-PLACE-02)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 140,
    lastInspected: "2024-09-30",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Commercial Restaurant Operation License #LK-7709",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "The Place Lekki 1",
        aliases: ["The Place Lekki", "The Place Admiralty Way", "The Place Lekki Phase 1"],
        cuisine: "Asun Jollof Rice, Grilled Croaker, Moi Moi, Chicken Fiesta & Chapman",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.7 ★ (19,500+ orders)",
        prepBay: "Hot Line Bay 1",
        prepStation: "Hot Line Bay 1",
        packagingTag: "The Place signature insulated boxes",
        claimedAddress: "Plot 1 Block A9, Admiralty Way, Lekki Phase 1, Lagos"
      }
    ]
  },

  // ==========================================
  // 14. BUKKA HUT - LEKKI PHASE 1 (Verified Authentic)
  // ==========================================
  {
    id: "fac-lekki-bukkahut-01",
    facilityCode: "LOS-LEK-BH-01",
    facilityName: "Bukka Hut Traditional Lounge - Lekki",
    operator: "Bukka Hut Hospitality Ltd",
    registeredBays: [
      "Traditional Soup Boiling Cauldrons",
      "Swallow Prep Counter (Amala & Pounded Yam)",
      "Outdoor Suya & Asun Pit"
    ],
    address: "Block 69A Admiralty Way, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    city: "lagos",
    coordinates: { lat: 6.4491, lng: 3.4721 },
    facilityType: "Authentic Traditional Nigerian Restaurant & Lounge",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Iconic authentic indigenous cuisine establishment with 110 dining seats, verified authentic soup brewing pots, and open swallow serving counter.",
    inspectionStatus: "Grade A Hygiene Certificate (LSSC & NAFDAC #LK-BH-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 110,
    lastInspected: "2024-10-11",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Full Hospitality Catering License #LK-BH-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Bukka Hut Lekki",
        aliases: ["Bukka Hut", "BukkaHut", "Bukkahut Admiralty", "Bukka Hut Admiralty Way"],
        cuisine: "Traditional Nigerian Soups, Amala Dudu, Pounded Yam, Gbegiri, Ewedu & Goat Meat",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.8 ★ (16,000+ reviews)",
        prepBay: "Claypot Simmering Line A",
        prepStation: "Claypot Simmering Line A",
        packagingTag: "Bukka Hut branded sealed soup tubs with microwaveable safety lids",
        claimedAddress: "Block 69A Admiralty Way, Lekki Phase 1, Lagos"
      }
    ]
  },

  // ==========================================
  // 15. BUKKA HUT - SURULERE (Verified Authentic Mainland)
  // ==========================================
  {
    id: "fac-surulere-bukkahut-02",
    facilityCode: "LOS-SRL-BH-02",
    facilityName: "Bukka Hut Mainland Dine-In & Delivery Hub",
    operator: "Bukka Hut Hospitality Ltd",
    registeredBays: [
      "Bode Thomas Main Soup Range 1",
      "Traditional Swallow Steaming Vat",
      "Outdoor Grill Gazebo"
    ],
    address: "118 Bode Thomas Street, Surulere, Lagos",
    area: "Surulere",
    city: "lagos",
    coordinates: { lat: 6.4952, lng: 3.3582 },
    facilityType: "Authentic Standalone Restaurant & Mainland Hub",
    ghostIndexScore: 6,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Established 95-seat dining room on Bode Thomas Street with on-site traditional culinary brigade and verified single-kitchen facility.",
    inspectionStatus: "Clean Kitchen Standard Distinction (LSSC #SR-BH-02)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 95,
    lastInspected: "2024-09-22",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Commercial Restaurant Permit #SR-BH-1092",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Bukka Hut Surulere",
        aliases: ["Bukka Hut Bode Thomas", "Bukkahut Surulere"],
        cuisine: "Afang Soup, Efo Riro, Assorted Meats, Ofada Rice & Peppered Snails",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food"],
        platformRating: "4.7 ★ (12,400+ reviews)",
        prepBay: "Traditional Soup Range 1",
        prepStation: "Traditional Soup Range 1",
        packagingTag: "Bukka Hut branded sealed thermal containers",
        claimedAddress: "118 Bode Thomas Street, Surulere, Lagos"
      }
    ]
  },

  // ==========================================
  // 16. CHICKEN REPUBLIC & PIEXPRESS - LEKKI (Dual Authentic Franchise)
  // ==========================================
  {
    id: "fac-lekki-cr-01",
    facilityCode: "LOS-LEK-CR-01",
    facilityName: "Chicken Republic & PieXpress Drive-Thru - Lekki 1",
    operator: "Food Concepts Plc",
    registeredBays: [
      "Henny Penny Pressure Fryer Bank",
      "Rice & Side Dish Holding Bay",
      "PieXpress Baking Oven Station"
    ],
    address: "Plot 2 Admiralty Way, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    city: "lagos",
    coordinates: { lat: 6.4485, lng: 3.4842 },
    facilityType: "Authentic Quick-Service Restaurant & Drive-Thru",
    ghostIndexScore: 12,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Official registered dual-brand quick service franchise operated under corporate parent Food Concepts Plc with 70 guest seats and open fry line.",
    inspectionStatus: "HACCP & LSSC Certified Commercial Kitchen (#LK-CR-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 70,
    lastInspected: "2024-10-06",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Franchise Commercial Food Prep License #FC-2024-991",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Chicken Republic Lekki",
        aliases: ["Chicken Republic", "CR Lekki", "Chicken Republic Admiralty", "Chicken Republic Lekki 1"],
        cuisine: "Spicy Fried Chicken, Soul Express Rice Bowls, Citizens Meals & Crunchy Wings",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "Drive-Thru"],
        platformRating: "4.6 ★ (25,000+ orders)",
        prepBay: "Henny Penny Pressure Fryer Bank",
        prepStation: "Henny Penny Pressure Fryer Bank",
        packagingTag: "Official Chicken Republic yellow and red box with certified safety seal",
        claimedAddress: "Plot 2 Admiralty Way, Lekki Phase 1, Lagos"
      },
      {
        name: "PieXpress Lekki",
        aliases: ["PieXpress", "Pie Express", "PieXpress Admiralty"],
        cuisine: "Flaky Gourmet Beef Pies, Chicken Pies & Smoked Sausage Rolls",
        isVirtual: false,
        virtual: false,
        priceTier: "₦",
        platforms: ["In-Person Counter", "Chowdeck", "Bolt Food"],
        platformRating: "4.5 ★ (8,200+ orders)",
        prepBay: "Pie Baking Deck Oven 1",
        prepStation: "Pie Baking Deck Oven 1",
        packagingTag: "PieXpress signature yellow pastry sleeve",
        claimedAddress: "Plot 2 Admiralty Way, Lekki Phase 1, Lagos"
      }
    ]
  },

  // ==========================================
  // 17. DOMINO'S PIZZA & COLD STONE - VICTORIA ISLAND (Dual Authentic)
  // ==========================================
  {
    id: "fac-vi-dominos-01",
    facilityCode: "LOS-VI-DOM-01",
    facilityName: "Domino's Pizza & Cold Stone Creamery Dual Flagship",
    operator: "Eat'N'Go Nigeria Ltd",
    registeredBays: [
      "Domino's Double Conveyor Pizza Oven Line",
      "Pizza Dough Proofing & Prep Bench",
      "Cold Stone Granite Slab Ice Cream Station"
    ],
    address: "Saka Tinubu Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4325, lng: 3.4258 },
    facilityType: "Authentic International Franchise Dual Storefront",
    ghostIndexScore: 9,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Full corporate dual franchise venue with 90 guest seats, open pizza toss line, and custom Cold Stone frozen granite slab counter.",
    inspectionStatus: "International Franchise Gold Standard Cleared (LSSC #VI-ENG-01)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 90,
    lastInspected: "2024-10-14",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Health",
    activePermits: "Commercial Franchise Hospitality License #ENG-2024-001",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Domino's Pizza VI",
        aliases: ["Dominos Pizza", "Domino's", "Dominos Saka Tinubu", "Domino's Victoria Island"],
        cuisine: "Hand-Tossed Pizzas, Meat Pie Pizza, Cheesy Bread & BBQ Wings",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Domino's Direct App", "Glovo"],
        platformRating: "4.7 ★ (31,000+ orders)",
        prepBay: "Middleby Marshall Conveyor Oven Bay",
        prepStation: "Middleby Marshall Conveyor Oven Bay",
        packagingTag: "Domino's signature insulated corrugated pizza box with heatwave technology",
        claimedAddress: "Saka Tinubu Street, Victoria Island, Lagos"
      },
      {
        name: "Cold Stone Creamery VI",
        aliases: ["Cold Stone", "Coldstone Creamery", "Coldstone VI", "Coldstone Saka Tinubu"],
        cuisine: "Custom Churned Ice Cream, Fresh Waffle Cones, Sundaes & Milkshakes",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Glovo"],
        platformRating: "4.8 ★ (18,500+ orders)",
        prepBay: "Frozen Granite Stone Station 1",
        prepStation: "Frozen Granite Stone Station 1",
        packagingTag: "Cold Stone branded insulated thermal ice cream tub with dry chill wrap",
        claimedAddress: "Saka Tinubu Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 18. KILIMANJARO RESTAURANT - MARYLAND MALL (Authentic Mall Dining)
  // ==========================================
  {
    id: "fac-maryland-kili-01",
    facilityCode: "LOS-MLD-KILI-01",
    facilityName: "Kilimanjaro Restaurant - Maryland Mall Unit",
    operator: "Sundry Foods Ltd",
    registeredBays: [
      "Mall Food Court Serving Line",
      "Steam Table Holding Bay 2",
      "Commercial Deep Frying Section"
    ],
    address: "Maryland Mall, 350-360 Ikorodu Road, Anthony, Lagos",
    area: "Maryland",
    city: "lagos",
    coordinates: { lat: 6.5721, lng: 3.3683 },
    facilityType: "Authentic Mall Food Court & Dine-In Restaurant",
    ghostIndexScore: 6,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Verified physical fast-casual restaurant inside Maryland Mall with 75 seats, open serving counters, and central mall ventilation.",
    inspectionStatus: "Mall Food Safety Distinction (LSSC Grade A #MLD-KILI-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 75,
    lastInspected: "2024-09-29",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Commercial Mall Catering License #MD-KILI-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Kilimanjaro Maryland",
        aliases: ["Kilimanjaro", "Kilimanjaro Restaurant", "Kilimanjaro Maryland Mall", "Kilimanjaro Anthony"],
        cuisine: "Nigerian Quick Service, Native Rice, Moi Moi, Crispy Chicken & Peppered Beef",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Food Court", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.6 ★ (14,000+ orders)",
        prepBay: "Main Steam Table 2",
        prepStation: "Main Steam Table 2",
        packagingTag: "Kilimanjaro custom green & white branded takeaway box",
        claimedAddress: "Maryland Mall, 350-360 Ikorodu Road, Anthony, Lagos"
      }
    ]
  },

  // ==========================================
  // 19. SWEET SENSATION - IKEJA GRA (Authentic Bakery & Dining)
  // ==========================================
  {
    id: "fac-ikeja-sweet-01",
    facilityCode: "LOS-IKJ-SWEET-01",
    facilityName: "Sweet Sensation Confectionery & Dining Hall",
    operator: "Sweet Sensation Confectionery Ltd",
    registeredBays: [
      "Bakery & Cake Decorating Unit",
      "Hot Meals Commercial Kitchen Bay",
      "Yamarita & Grill Station"
    ],
    address: "26 Isaac John Street, Ikeja GRA, Lagos",
    area: "Ikeja GRA",
    city: "lagos",
    coordinates: { lat: 6.5865, lng: 3.3602 },
    facilityType: "Authentic Standalone Bakery & Fast-Casual Dining Hall",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Long-standing authentic quick-service and bakery brand with 80 indoor seats, dedicated on-site ovens, and walk-in pastry display counters.",
    inspectionStatus: "Full Clean Kitchen Standard Distinction (LSSC #IK-SWEET-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 80,
    lastInspected: "2024-10-09",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commercial Bakery & Food Preparation License #IK-SS-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Sweet Sensation Ikeja",
        aliases: ["Sweet Sensation", "Sweet Sensation Isaac John", "Sweet Sensation Ikeja GRA"],
        cuisine: "Artisan Cakes, Meat Pies, Jollof Rice, Sukiyaki, Yamarita & Shawarma",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.6 ★ (15,500+ reviews)",
        prepBay: "Hot Meal Station 1",
        prepStation: "Hot Meal Station 1",
        packagingTag: "Sweet Sensation custom red branded boxes and cake cartons",
        claimedAddress: "26 Isaac John Street, Ikeja GRA, Lagos"
      }
    ]
  },

  // ==========================================
  // 20. TERRA KULTURE - VICTORIA ISLAND (Authentic Cultural Fine Dining)
  // ==========================================
  {
    id: "fac-vi-auth-01",
    facilityCode: "LOS-VI-AUTH-01",
    facilityName: "Terra Kulture Cultural & Culinary Center",
    operator: "Terra Kulture Arts & Hospitality Group",
    registeredBays: [
      "Main Executive Brigade Kitchen",
      "Cultural Gallery Prep Station",
      "Specialty Palm Wine & Cocktail Bar"
    ],
    address: "Plot 1376 Tiamiyu Savage Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4277, lng: 3.4285 },
    facilityType: "Authentic Brick-and-Mortar Cultural Center & Fine Dining",
    ghostIndexScore: 4,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Dedicated single-brand restaurant with expansive 120-seat dine-in gallery, verified on-site culinary staff, and cultural theatre.",
    inspectionStatus: "Gold Standard Certified (NAFDAC & LSSC Cleared #VI-001)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 120,
    lastInspected: "2024-10-10",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Tourism/Safety",
    activePermits: "Full Hospitality & Food Service License #LGH-2024-019",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Terra Kulture Restaurant",
        aliases: ["Terra Kulture", "Terra Kulture VI", "Terra Kulture Arts"],
        cuisine: "Contemporary Nigerian Fine Dining, Ofada Delicacies & Plantain Combos",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Direct Concierge"],
        platformRating: "4.8 ★ (12,000+ reviews)",
        prepBay: "Main Executive Brigade Kitchen",
        prepStation: "Main Executive Brigade Kitchen",
        packagingTag: "Premium custom wooden-effect embossed boxes",
        claimedAddress: "Plot 1376 Tiamiyu Savage Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 21. THE YELLOW CHILLI - IKEJA GRA (Authentic Fine Dining)
  // ==========================================
  {
    id: "fac-ikeja-auth-01",
    facilityCode: "LOS-IKJ-AUTH-01",
    facilityName: "The Yellow Chilli Restaurant & Bar",
    operator: "The Yellow Chilli Hospitality Ltd",
    registeredBays: [
      "Executive Seafood Okro Line",
      "Continental & Nigerian Main Kitchen",
      "Outdoor Garden Bar & Lounge"
    ],
    address: "35 Joel Ogunnaike Street, Ikeja GRA, Lagos",
    area: "Ikeja GRA",
    city: "lagos",
    coordinates: { lat: 6.5912, lng: 3.3541 },
    facilityType: "Authentic Standalone Restaurant & Lounge",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Iconic standalone dining establishment with 85 indoor and garden seats, dedicated executive chef brigade, and verified physical kitchen.",
    inspectionStatus: "Full Clean Kitchen Standard Distinction (LSSC Grade A #IK-502)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 85,
    lastInspected: "2024-09-25",
    regulatoryBody: "Lagos State Safety Commission",
    activePermits: "Full On-Premises Catering & Dining License #IK-6612",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "The Yellow Chilli",
        aliases: ["Yellow Chilli", "Yellow Chilli Ikeja", "The Yellow Chilli Restaurant"],
        cuisine: "Gourmet Seafood Okro, Jollof Fiesta, Pepper Soup & Pan-African Classics",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food"],
        platformRating: "4.7 ★ (8,900+ reviews)",
        prepBay: "Dedicated Standalone Restaurant Kitchen",
        prepStation: "Dedicated Standalone Restaurant Kitchen",
        packagingTag: "Yellow Chilli custom branded thermal transport containers",
        claimedAddress: "35 Joel Ogunnaike Street, Ikeja GRA, Lagos"
      }
    ]
  },

  // ==========================================
  // 22. OCEAN BASKET - LEKKI PHASE 1 (Authentic Waterfront Dining)
  // ==========================================
  {
    id: "fac-lekki-auth-01",
    facilityCode: "LOS-LEK-AUTH-01",
    facilityName: "Ocean Basket Lekki Waterfront",
    operator: "Ocean Basket Nigeria Franchise Ltd",
    registeredBays: [
      "Open Commercial Seafood Line",
      "Sushi & Cold Seafood Counter",
      "Deep Fry & Platter Assembly Bay"
    ],
    address: "35 Admiralty Way, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    city: "lagos",
    coordinates: { lat: 6.4462, lng: 3.4751 },
    facilityType: "Flagship Waterfront Brick-and-Mortar Restaurant",
    ghostIndexScore: 7,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Full-service seafood restaurant with 150-seat indoor/outdoor waterfront dining and open prep seafood counter.",
    inspectionStatus: "International Standard Certified Kitchen (LSSC Grade A #LK-4100)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 150,
    lastInspected: "2024-10-05",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commercial Dining & Bar Operation Permit #LK-3091",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Ocean Basket Lekki",
        aliases: ["Ocean Basket", "Ocean Basket Admiralty", "Ocean Basket Lagos"],
        cuisine: "Mediterranean Seafood Platters, Grilled Calamari, King Prawns & Sushi",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.7 ★ (10,400+ reviews)",
        prepBay: "Dedicated Open Seafood Line & Prep Stations",
        prepStation: "Dedicated Open Seafood Line & Prep Stations",
        packagingTag: "Ocean Basket signature insulated maritime takeout boxes",
        claimedAddress: "35 Admiralty Way, Lekki Phase 1, Lagos"
      }
    ]
  },

  // ==========================================
  // 23. DANUBE BISTRO - IKOYI (Authentic Patisserie & Cafe)
  // ==========================================
  {
    id: "fac-ikoyi-auth-01",
    facilityCode: "LOS-IKY-AUTH-01",
    facilityName: "Danube Bistro & Artisanal Patisserie",
    operator: "Danube Hospitality Ventures Ltd",
    registeredBays: [
      "Artisan Stone Deck Bakery",
      "Bistro Hot Cooking Line",
      "Specialty Espresso & Brew Bar"
    ],
    address: "12 Glover Road, Ikoyi, Lagos",
    area: "Ikoyi",
    city: "lagos",
    coordinates: { lat: 6.4529, lng: 3.4398 },
    facilityType: "Boutique French Bistro & Dedicated On-Site Bakery",
    ghostIndexScore: 3,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Verified physical patisserie and cafe featuring visible stone deck baking ovens and 45-seat garden dining patio.",
    inspectionStatus: "Pristine Hygiene Standard (LSSC Gold Certificate #IKY-018)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 45,
    lastInspected: "2024-10-12",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Artisanal Food Production & Dining License #IKY-9002",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Danube Bistro Ikoyi",
        aliases: ["Danube Bistro", "Danube Patisserie", "Danube Ikoyi"],
        cuisine: "French Sourdough, Almond Croissants, Eggs Benedict & Specialty Coffee",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Takeaway Counter"],
        platformRating: "4.9 ★ (3,500+ reviews)",
        prepBay: "Artisan Deck Bakery & Hot Line",
        prepStation: "Artisan Deck Bakery & Hot Line",
        packagingTag: "Danube custom embossed French pastry box with ribbon",
        claimedAddress: "12 Glover Road, Ikoyi, Lagos"
      }
    ]
  },

  // ==========================================
  // 24. MEGA CHICKEN - FESTAC TOWN (Authentic Flagship Complex)
  // ==========================================
  {
    id: "fac-festac-mega-03",
    facilityCode: "LOS-FES-MEGA-03",
    facilityName: "Mega Chicken Fast Food & Restaurant - Festac Town",
    operator: "Mega Chicken Restaurants Ltd",
    registeredBays: [
      "Ground Floor Main Cafeteria Line & Pastry Counter",
      "Chinese & Continental Executive Wok Station",
      "Commercial High-Capacity Bakery & Oven Suite"
    ],
    address: "Plot 1, Commercial Avenue, 21 Road, Festac Town, Lagos",
    area: "Festac Town",
    city: "lagos",
    coordinates: { lat: 6.4678, lng: 3.2842 },
    facilityType: "Multi-Story Authentic Flagship Restaurant & Industrial Bakery",
    ghostIndexScore: 3,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Verified multi-floor dining complex with 200+ seating, dedicated Chinese chef station, and in-house industrial bakery.",
    inspectionStatus: "Certified Premium Food Handling Venue (LSSC #FES-2104)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 200,
    lastInspected: "2024-10-14",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commercial Restaurant & Food Safety Certificate #LSSC-2024-7712",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Mega Chicken Festac",
        aliases: ["Mega Chicken Festac", "Mega Chicken 21 Road", "Mega Chicken", "Mega Chicken Festac Town"],
        cuisine: "Nigerian Jollof, Fried Rice, Chinese Cuisine & Confectionery",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "Mega Chicken Direct"],
        platformRating: "4.7 ★ (4,200+ orders)",
        prepBay: "Ground Floor Main Cafeteria Line",
        prepStation: "Ground Floor Main Cafeteria Line",
        packagingTag: "Branded Mega Chicken heavy thermal sealed container & paper bags",
        claimedAddress: "Plot 1 Commercial Avenue, 21 Road, Festac Town, Lagos"
      }
    ]
  },

  // ==========================================
  // 25. THE PLACE RESTAURANT - IKEJA GRA (Authentic Dining & Bar)
  // ==========================================
  {
    id: "fac-ikeja-place-03",
    facilityCode: "LOS-IKJ-PLACE-03",
    facilityName: "The Place Restaurant & Bar - Ikeja GRA",
    operator: "The Place Hospitality Group (Smackers Ltd)",
    registeredBays: [
      "Main Hot Food Buffet Serving Station",
      "Smoked Charcoal Asun Grate & Barbecue Yard",
      "Executive Bar & Beverage Lounge Counter"
    ],
    address: "45 Isaac John Street, Ikeja GRA, Lagos",
    area: "Ikeja GRA",
    city: "lagos",
    coordinates: { lat: 6.5885, lng: 3.3592 },
    facilityType: "Full-Service Authentic Dining Restaurant & Lounge",
    ghostIndexScore: 4,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "160-seat authentic dining venue with bustling walk-in buffet and dedicated outdoor charcoal Asun grill station.",
    inspectionStatus: "Full Food Safety Compliance Certified (LSSC #IKJ-9821)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 160,
    lastInspected: "2024-09-28",
    regulatoryBody: "Lagos State Safety Commission & NAFDAC",
    activePermits: "Hospitality & Commercial Dine-In License #IKJ-HOSP-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "The Place Restaurant Ikeja GRA",
        aliases: ["The Place Ikeja", "The Place Isaac John", "The Place GRA", "The Place"],
        cuisine: "Spicy Goat Meat Asun, Smoky Jollof Rice, Grilled Chicken & Plantain",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.6 ★ (8,900+ orders)",
        prepBay: "Main Kitchen Serving Line & Asun Grill",
        prepStation: "Main Kitchen Serving Line & Asun Grill",
        packagingTag: "The Place branded orange and black sealed takeaway boxes",
        claimedAddress: "45 Isaac John Street, Ikeja GRA, Lagos"
      }
    ]
  },

  // ==========================================
  // 26. BUKKA HUT - GBAGADA (Authentic Traditional Kitchen)
  // ==========================================
  {
    id: "fac-gbagada-bh-03",
    facilityCode: "LOS-GBG-BH-03",
    facilityName: "Bukka Hut Traditional Kitchen - Gbagada",
    operator: "Bukka Hut Hospitality Ltd",
    registeredBays: [
      "Heavy Soup Cauldron Boiling Line",
      "Swallow Preparation Station (Amala / Pounded Yam / Eba)",
      "Assorted Offal & Goat Meat Steaming Station"
    ],
    address: "12 Diya Street, Ifako-Gbagada, Lagos",
    area: "Gbagada",
    city: "lagos",
    coordinates: { lat: 6.5542, lng: 3.3881 },
    facilityType: "Authentic Traditional Dining Hall & Delivery Branch",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Dedicated traditional dining room with 95 seats, open soup cauldrons, and live swallow preparation.",
    inspectionStatus: "Standard Health Authority Compliance (LSSC #GBG-4412)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 95,
    lastInspected: "2024-10-09",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Health",
    activePermits: "Commercial Traditional Food License #GBG-8812",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Bukka Hut Gbagada",
        aliases: ["Bukka Hut Gbagada", "Bukka Hut Diya", "Bukka Hut Ifako", "Bukka Hut"],
        cuisine: "Amala Dudu, Ewedu, Gbegiri, Goat Meat & Native Seafood Okro",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.5 ★ (5,100+ orders)",
        prepBay: "Cauldron Soup Line & Solid Swallow Station",
        prepStation: "Cauldron Soup Line & Solid Swallow Station",
        packagingTag: "Bukka Hut signature green foil-lined bowls and leakproof tubs",
        claimedAddress: "12 Diya Street, Ifako-Gbagada, Lagos"
      }
    ]
  },

  // ==========================================
  // 27. KILIMANJARO - VICTORIA ISLAND (Authentic Fast Food)
  // ==========================================
  {
    id: "fac-vi-kili-02",
    facilityCode: "LOS-VI-KILI-02",
    facilityName: "Kilimanjaro Fast Food - Victoria Island",
    operator: "Sundry Foods Ltd",
    registeredBays: [
      "Front Serving Steam Line",
      "Pressure Fryer Battery",
      "Native Soup Range"
    ],
    address: "Plot 243A Adeola Odeku Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4298, lng: 3.4182 },
    facilityType: "Quick-Service Authentic Restaurant Chain",
    ghostIndexScore: 6,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "85-seat walk-in restaurant with open cafeteria counter and registered high-throughput commercial kitchen.",
    inspectionStatus: "Sanitary Certification Cleared (LSSC #VI-2301)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 85,
    lastInspected: "2024-10-04",
    regulatoryBody: "Lagos State Safety Commission & NAFDAC",
    activePermits: "QSR Food Handler Permit #VI-QSR-2024-51",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Kilimanjaro Victoria Island",
        aliases: ["Kilimanjaro VI", "Kilimanjaro Adeola Odeku", "Kilimanjaro Lagos", "Kilimanjaro Restaurant"],
        cuisine: "Native Jollof Rice, Coconut Rice, Crispy Peppered Chicken & Egusi Soup",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.4 ★ (3,900+ orders)",
        prepBay: "Front Hot Service Steam Bain-Marie",
        prepStation: "Front Hot Service Steam Bain-Marie",
        packagingTag: "Kilimanjaro orange branded paper carryout bags with sealed thermal bowls",
        claimedAddress: "Plot 243A Adeola Odeku Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 28. CHICKEN REPUBLIC - IKEJA CITY MALL (Authentic Mall Anchor)
  // ==========================================
  {
    id: "fac-ikeja-cr-02",
    facilityCode: "LOS-IKJ-CR-02",
    facilityName: "Chicken Republic & PieXpress - Ikeja City Mall",
    operator: "Food Concepts Plc",
    registeredBays: [
      "Henny Penny 4-Vat Pressure Fryer Bank",
      "PieXpress Heated Pastry Showcase",
      "Rice & Side Prep Cookers"
    ],
    address: "Food Court Level 1, Ikeja City Mall, Alausa, Ikeja, Lagos",
    area: "Ikeja",
    city: "lagos",
    coordinates: { lat: 6.6171, lng: 3.3582 },
    facilityType: "Authentic Mall QSR Flagship & PieXpress Counter",
    ghostIndexScore: 9,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "High-volume shopping mall food court anchor with 120 shared mall seats and dedicated kitchen line.",
    inspectionStatus: "Fully Compliant Mall Anchor Audit (LSSC #IKJ-ICM-09)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 120,
    lastInspected: "2024-10-11",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Mall Commercial Eatery License #ICM-CR-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Chicken Republic ICM",
        aliases: ["Chicken Republic Ikeja", "Chicken Republic Alausa", "Chicken Republic Mall", "Chicken Republic", "PieXpress Ikeja"],
        cuisine: "Spicy Crunchy Fried Chicken, Citizen Meal, Jollof Rice & Beef Pies",
        isVirtual: false,
        virtual: false,
        priceTier: "₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "FoodConcepts Direct"],
        platformRating: "4.6 ★ (14,200+ orders)",
        prepBay: "Henny Penny Pressure Fryer Bank",
        prepStation: "Henny Penny Pressure Fryer Bank",
        packagingTag: "Chicken Republic signature red and yellow boxes with tamper-evident stickers",
        claimedAddress: "Food Court Level 1, Ikeja City Mall, Alausa, Ikeja, Lagos"
      }
    ]
  },

  // ==========================================
  // 29. CHICKEN REPUBLIC - SURULERE (Authentic QSR Eatery)
  // ==========================================
  {
    id: "fac-surulere-cr-03",
    facilityCode: "LOS-SRL-CR-03",
    facilityName: "Chicken Republic - Adeniran Ogunsanya Surulere",
    operator: "Food Concepts Plc",
    registeredBays: [
      "Frymaster Electric Fryer Bank",
      "PieXpress Display Oven",
      "Warm Holding Carousel"
    ],
    address: "68 Adeniran Ogunsanya Street, Surulere, Lagos",
    area: "Surulere",
    city: "lagos",
    coordinates: { lat: 6.4975, lng: 3.3548 },
    facilityType: "Stand-Alone Fast Food Eatery & PieXpress Outlet",
    ghostIndexScore: 10,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "65-seat walk-in dining restaurant with active customer seating and open glass-fronted counter.",
    inspectionStatus: "Safety & Hygiene Approved (LSSC #SRL-6701)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 65,
    lastInspected: "2024-09-30",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Fast Food Service Operation Permit #SRL-CR-2024",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Chicken Republic Surulere",
        aliases: ["Chicken Republic Adeniran Ogunsanya", "Chicken Republic Bode Thomas", "Chicken Republic Surulere", "Chicken Republic"],
        cuisine: "Flame-Grilled & Crunchy Fried Chicken, Spiced Rice Bowls, Meat Pies",
        isVirtual: false,
        virtual: false,
        priceTier: "₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.4 ★ (6,300+ orders)",
        prepBay: "Commercial Fryer Battery & Display Counter",
        prepStation: "Commercial Fryer Battery & Display Counter",
        packagingTag: "Chicken Republic authentic red cartons",
        claimedAddress: "68 Adeniran Ogunsanya Street, Surulere, Lagos"
      }
    ]
  },

  // ==========================================
  // 30. DOMINO'S PIZZA & COLD STONE - SURULERE (Authentic Dual Franchise)
  // ==========================================
  {
    id: "fac-surulere-dom-02",
    facilityCode: "LOS-SRL-DOM-02",
    facilityName: "Domino's Pizza & Cold Stone Creamery - Bode Thomas",
    operator: "Eat'N'Go Nigeria Ltd",
    registeredBays: [
      "Lincoln Impinger Conveyor Pizza Oven Battery",
      "Dough Staging & Cold Proofing Table",
      "Frozen Granite Stone Mixing Counter"
    ],
    address: "44 Bode Thomas Street, Surulere, Lagos",
    area: "Surulere",
    city: "lagos",
    coordinates: { lat: 6.4952, lng: 3.3521 },
    facilityType: "Dual-Franchise Dine-In Pizzeria & Artisanal Creamery",
    ghostIndexScore: 7,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "Legitimate corporate co-location by Eat'N'Go with 80-seat shared customer dining area and glass prep counter.",
    inspectionStatus: "Passed Health & Fire Extinguisher Inspection (LSSC #SRL-DOM-02)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 80,
    lastInspected: "2024-10-15",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Health",
    activePermits: "EatNGo Multi-Franchise Food License #ENG-2024-SRL",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Domino's Pizza Surulere",
        aliases: ["Dominos Surulere", "Dominos Bode Thomas", "Dominos Pizza Surulere", "Dominos Pizza"],
        cuisine: "Hand-Tossed Pizza, Cheesy Bread & BBQ Wings",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Domino's App", "Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (7,400+ orders)",
        prepBay: "Domino's Conveyor Pizza Oven Line",
        prepStation: "Domino's Conveyor Pizza Oven Line",
        packagingTag: "Domino's Pizza authentic corrugated cardboard box",
        claimedAddress: "44 Bode Thomas Street, Surulere, Lagos"
      },
      {
        name: "Cold Stone Creamery Surulere",
        aliases: ["Cold Stone Surulere", "Cold Stone Creamery Bode Thomas", "Cold Stone", "Coldstone Surulere"],
        cuisine: "Super Premium Ice Cream, Waffle Cones & Thick Shakes",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Takeaway"],
        platformRating: "4.7 ★ (5,800+ orders)",
        prepBay: "Frozen Granite Stone Mixing Counter",
        prepStation: "Frozen Granite Stone Mixing Counter",
        packagingTag: "Cold Stone branded thermo-insulated tubs with plastic domes",
        claimedAddress: "44 Bode Thomas Street, Surulere, Lagos"
      }
    ]
  },

  // ==========================================
  // 31. SWEET SENSATION - VICTORIA ISLAND (Authentic Eatery & Pastry Lounge)
  // ==========================================
  {
    id: "fac-vi-sweet-02",
    facilityCode: "LOS-VI-SWEET-02",
    facilityName: "Sweet Sensation Eatery - Victoria Island",
    operator: "Sweet Sensation Confectionery Ltd",
    registeredBays: [
      "Hot African Food Buffet Island",
      "Confectionery Pastry & Cake Showcase",
      "Grill & Shawarma Barbecue Bay"
    ],
    address: "Plot 300 Akin Adesola Street, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4312, lng: 3.4215 },
    facilityType: "Authentic Dine-In Confectionery & Quick Restaurant",
    ghostIndexScore: 7,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "90-seat authentic family restaurant with customer seating, confectionery counter, and verified grease trap.",
    inspectionStatus: "Certified Hygiene Standard (LSSC #VI-SWEET-02)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 90,
    lastInspected: "2024-10-06",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commercial Confectionery & Dining License #SWT-2024-VI",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Sweet Sensation Victoria Island",
        aliases: ["Sweet Sensation VI", "Sweet Sensation Akin Adesola", "Sweet Sensation", "Sweet Sensation Restaurant"],
        cuisine: "Jollof Rice, Sukiyak Stew, Meat Pies, Scotch Eggs & Celebration Cakes",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.4 ★ (3,100+ orders)",
        prepBay: "Executive Bakery & Hot Meal Bain-Marie Line",
        prepStation: "Executive Bakery & Hot Meal Bain-Marie Line",
        packagingTag: "Sweet Sensation magenta branded boxes & cake carryouts",
        claimedAddress: "Plot 300 Akin Adesola Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 32. CACTUS RESTAURANT - VICTORIA ISLAND (Authentic Waterfront Dining)
  // ==========================================
  {
    id: "fac-vi-cactus-01",
    facilityCode: "LOS-VI-CACTUS-01",
    facilityName: "Cactus Restaurant & Patisserie Waterfront",
    operator: "Cactus Hospitality Services Ltd",
    registeredBays: [
      "Main Waterfront Chef Brigade Hot Line",
      "Artisan Patisserie & Gelato Kitchen",
      "Wood-Fired Pizza Deck Oven"
    ],
    address: "20/24 Ozumba Mbadiwe Avenue, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4385, lng: 3.4354 },
    facilityType: "Premier Waterfront Authentic Dining & Artisanal Bakery",
    ghostIndexScore: 2,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "175-seat lagoon waterfront restaurant with open pastry terrace, wood-fired hearth, and 100% dedicated culinary brigade.",
    inspectionStatus: "Gold Rating Hospitality Excellence (LSSC #VI-CAC-01)",
    sanitationGrade: "A+",
    dineInAvailable: true,
    dineInCapacity: 175,
    lastInspected: "2024-10-18",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Executive Fine Dining & Pastry Production License #CAC-2024-99",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Cactus Restaurant",
        aliases: ["Cactus Lagos", "Cactus VI", "Cactus Cafe", "Cactus Bakery", "Cactus Waterfront"],
        cuisine: "Mediterranean Bistro, Thin-Crust Woodfired Pizza, Gourmet Burgers & Continental Patisserie",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Takeaway Counter"],
        platformRating: "4.8 ★ (9,800+ reviews)",
        prepBay: "Main Chef Brigade Line & Wood-Fired Hearth",
        prepStation: "Main Chef Brigade Line & Wood-Fired Hearth",
        packagingTag: "Cactus embossed luxury craft bags and pastry window boxes",
        claimedAddress: "20/24 Ozumba Mbadiwe Avenue, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 33. JEVINIK RESTAURANT - VICTORIA ISLAND (Authentic Traditional Dining)
  // ==========================================
  {
    id: "fac-vi-jevinik-01",
    facilityCode: "LOS-VI-JEV-01",
    facilityName: "Jevinik Traditional Restaurant - Victoria Island",
    operator: "Jevinik Restaurant Chain Ltd",
    registeredBays: [
      "Grand Soup Cauldron Station (Ofe Owerri / Fisherman Soup / Afang)",
      "Swallow Steam & Rolling Counter",
      "Native Protein Stewing Range"
    ],
    address: "14B Agoro Odiyan Street, off Adeola Odeku, Victoria Island, Lagos",
    area: "Victoria Island",
    city: "lagos",
    coordinates: { lat: 6.4278, lng: 3.4145 },
    facilityType: "Authentic Heritage Traditional Dining Hall",
    ghostIndexScore: 3,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "150-seat high-volume authentic restaurant famous for massive native soup portions with full walk-in floor.",
    inspectionStatus: "Clean Sanitary Audit Record (LSSC #VI-JEV-88)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 150,
    lastInspected: "2024-10-08",
    regulatoryBody: "NAFDAC & Lagos State Ministry of Health",
    activePermits: "Heritage Dining & Hospitality License #JEV-2024-VI",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Jevinik Restaurant VI",
        aliases: ["Jevinik Victoria Island", "Jevinik Lagos", "Jevinik", "Jevinik Agoro Odiyan", "Jevinik Restaurant"],
        cuisine: "Ofe Owerri, Fisherman Soup, Afang, Bitterleaf Soup, Pounded Yam & Goat Meat",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Takeaway Counter"],
        platformRating: "4.6 ★ (6,700+ reviews)",
        prepBay: "Traditional High-Volume Heavy Cauldron Kitchen",
        prepStation: "Traditional High-Volume Heavy Cauldron Kitchen",
        packagingTag: "Jevinik heavy duty dual-sealed soup tubs with tamper tape",
        claimedAddress: "14B Agoro Odiyan Street, Victoria Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 34. TASTEE FRIED CHICKEN - IKEJA GRA (Authentic Fast Food)
  // ==========================================
  {
    id: "fac-ikeja-tfc-01",
    facilityCode: "LOS-IKJ-TFC-01",
    facilityName: "Tastee Fried Chicken (TFC) - Ikeja GRA",
    operator: "De-Tastee Fried Chicken Ltd",
    registeredBays: [
      "Commercial Pressure Fryer Battery",
      "Hot Bain-Marie Rice Station",
      "Confectionery & Pastry Warmer"
    ],
    address: "22 Isaac John Street, Ikeja GRA, Lagos",
    area: "Ikeja GRA",
    city: "lagos",
    coordinates: { lat: 6.5841, lng: 3.3562 },
    facilityType: "Authentic Legacy Fast Food Eatery",
    ghostIndexScore: 5,
    riskLevel: "VERIFIED AUTHENTIC RESTAURANT",
    riskSummary: "110-seat established dine-in restaurant with open dining halls, dedicated frying bays, and prominent street signage.",
    inspectionStatus: "Standard Regulatory Approval (LSSC #IKJ-TFC-01)",
    sanitationGrade: "A",
    dineInAvailable: true,
    dineInCapacity: 110,
    lastInspected: "2024-10-12",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Fast Food Chain Operation Permit #TFC-2024-IKJ",
    sharedExtraction: false,
    sharedEquipment: [],
    brands: [
      {
        name: "Tastee Fried Chicken Ikeja",
        aliases: ["TFC Ikeja", "Tastee Fried Chicken", "TFC Isaac John", "Tastee Ikeja", "TFC"],
        cuisine: "Original Recipe Fried Chicken, Jollof Rice, Fried Rice, Meat Pies & Moin-Moin",
        isVirtual: false,
        virtual: false,
        priceTier: "₦₦",
        platforms: ["In-Person Dine-In", "Chowdeck", "Bolt Food", "Glovo", "TFC Direct"],
        platformRating: "4.5 ★ (8,100+ orders)",
        prepBay: "Commercial Pressure Fryer Battery",
        prepStation: "Commercial Pressure Fryer Battery",
        packagingTag: "TFC vintage red and white boxes with grease-resistant lining",
        claimedAddress: "22 Isaac John Street, Ikeja GRA, Lagos"
      }
    ]
  },

  // ==========================================
  // 35. PHANTOM KITCHENS OPEBI HUB - BAY 5 (6 Virtual Brands)
  // ==========================================
  {
    id: "fac-opebi-ghost-10",
    facilityCode: "LOS-IKJ-GHOST-10",
    facilityName: "Phantom Kitchens Opebi Hub - Unit 5B",
    operator: "Phantom Cloud Kitchens West Africa Ltd",
    registeredBays: [
      "Bay 5 - Dual Griddle Alpha & Bravo",
      "Bay 5 - Single High Pressure Jet Wok Burner",
      "Bay 5 - Shared Multi-Basket Deep Fryer Unit #3",
      "Bay 5 - Countertop Convection Oven & Cold Assembly"
    ],
    address: "Plot 18 Opebi Road, Salvation Bus Stop, Ikeja, Lagos",
    area: "Ikeja",
    city: "lagos",
    coordinates: { lat: 6.5912, lng: 3.3589 },
    facilityType: "Subdivided Industrial Dark Commissary Complex",
    ghostIndexScore: 97,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "6 virtual storefronts operating within a 35m² windowless partitioned bay with shared exhaust extraction and high rider density.",
    inspectionStatus: "Warning Issued - Insufficient Ventilation & Shared Grease Line (LSSC #OPB-8921)",
    sanitationGrade: "C-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-22",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Commissary Kitchen Permit #LSSC-2024-4190",
    sharedExtraction: true,
    sharedEquipment: ["Commercial 3-Basket Deep Fryer #3", "Imperial 4-Burner Wok Range", "Single 500L Reach-in Freezer"],
    brands: [
      {
        name: "Opebi Smashed Burger Lab",
        aliases: ["Opebi Burger Lab", "Smashed Burger Opebi", "Burger Lab Ikeja", "Burger Lab"],
        cuisine: "Truffle Smashed Burgers & Loaded Sweet Potato Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.7 ★ (2,400+ orders)",
        prepBay: "Bay 5 - Griddle Alpha",
        prepStation: "Bay 5 - Griddle Alpha",
        packagingTag: "Generic black kraft burger box with matte foil sticker",
        claimedAddress: "Plot 18 Opebi Road, Suite 5B, Ikeja, Lagos"
      },
      {
        name: "Fire Wok Bangkok Express",
        aliases: ["Fire Wok Opebi", "Bangkok Express Ikeja", "Fire Wok Lagos", "Bangkok Express"],
        cuisine: "Thai Street Pad Thai & Tom Yum Fried Rice",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.4 ★ (1,320+ orders)",
        prepBay: "Bay 5 - Single High Pressure Jet Wok Burner",
        prepStation: "Bay 5 - Single High Pressure Jet Wok Burner",
        packagingTag: "Folded wire-handle Chinese takeout pail with generic chopstick pack",
        claimedAddress: "Plot 18 Opebi Road, Unit 12, Ikeja, Lagos"
      },
      {
        name: "Naija Suya Crunch Shack",
        aliases: ["Suya Crunch Shack", "Suya Shack Opebi", "Naija Suya Shack", "Suya Crunch"],
        cuisine: "Spicy Boneless Beef Suya & Roasted Dodo",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.3 ★ (980+ orders)",
        prepBay: "Bay 5 - Griddle Alpha",
        prepStation: "Bay 5 - Griddle Alpha",
        packagingTag: "Silver greaseproof aluminum wrap with hand-written order marker",
        claimedAddress: "Plot 18 Opebi Road, Shop 3, Ikeja, Lagos"
      },
      {
        name: "Tokyo Teriyaki & Katsu Bowl",
        aliases: ["Tokyo Teriyaki Ikeja", "Katsu Bowl Lagos", "Tokyo Katsu", "Teriyaki Bowl"],
        cuisine: "Crispy Chicken Katsu Curry & Teriyaki Glazed Salmon",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.5 ★ (1,650+ orders)",
        prepBay: "Bay 5 - Shared Multi-Basket Deep Fryer Unit #3",
        prepStation: "Bay 5 - Shared Multi-Basket Deep Fryer Unit #3",
        packagingTag: "Two-compartment black plastic bento bowl with transparent lid",
        claimedAddress: "Plot 18 Opebi Road, Ikeja, Lagos"
      },
      {
        name: "The Midnight Gyro & Shawarma",
        aliases: ["Midnight Gyro Opebi", "Midnight Shawarma Ikeja", "The Midnight Gyro", "Midnight Gyro"],
        cuisine: "Lamb Gyros, Shawarma Rolls & Loaded Garlic Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.6 ★ (2,100+ orders)",
        prepBay: "Bay 5 - Dual Griddle Alpha & Bravo",
        prepStation: "Bay 5 - Dual Griddle Alpha & Bravo",
        packagingTag: "Foil-lined pita wrapper and unlabeled brown paper sack",
        claimedAddress: "Plot 18 Opebi Road, Floor 1, Ikeja, Lagos"
      },
      {
        name: "Crave Cookie & Dough Co",
        aliases: ["Crave Cookie Ikeja", "Crave Dough Lagos", "Crave Cookies", "Crave Dough Co"],
        cuisine: "Warm Stuffed Chocolate Cookies & Gourmet Milkshakes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.8 ★ (3,400+ orders)",
        prepBay: "Bay 5 - Countertop Convection Oven & Cold Assembly",
        prepStation: "Bay 5 - Countertop Convection Oven & Cold Assembly",
        packagingTag: "Pastel pink 4-pack bakery carton with thermal label sticker",
        claimedAddress: "Plot 18 Opebi Road, Ikeja, Lagos"
      }
    ]
  },

  // ==========================================
  // 36. SHADOW COMMISSARY - GBAGADA CLUSTER (7 Virtual Brands)
  // ==========================================
  {
    id: "fac-gbagada-ghost-11",
    facilityCode: "LOS-GBG-GHOST-11",
    facilityName: "Shadow Cloud Commissary - Gbagada Cluster Bay 12",
    operator: "Shadow Commissary Networks NG Ltd",
    registeredBays: [
      "Bay 12 - Shared High-Capacity Flat Top Range",
      "Bay 12 - Deep Fryer Vat Battery A & B",
      "Bay 12 - Vertical Doner & Shawarma Spit Unit",
      "Bay 12 - Beverage Dispenser & Dessert Island"
    ],
    address: "42 Expressway Service Road, Charlie Boy Bus Stop, Gbagada, Lagos",
    area: "Gbagada",
    city: "lagos",
    coordinates: { lat: 6.5518, lng: 3.3845 },
    facilityType: "Multi-Tenant Ghost Kitchen Factory",
    ghostIndexScore: 98,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "7 independent delivery brands sharing a single 45m² commissary line with common fryer oil and zero physical dining access.",
    inspectionStatus: "Severe Sanitary Citation - Cross-Allergen Risk (LSSC #GBG-9031)",
    sanitationGrade: "D",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-18",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Shared Industrial Kitchen License #GBG-SHD-2024",
    sharedExtraction: true,
    sharedEquipment: ["Dual Commercial Frying Vat Battery A/B", "American Range 48\" Flat Top", "Commercial Doner Spit"],
    brands: [
      {
        name: "Ghost Taco & Quesadilla Syndicate",
        aliases: ["Ghost Taco Gbagada", "Taco Syndicate Lagos", "Ghost Taco", "Taco Syndicate"],
        cuisine: "Birria Beef Tacos, Cheesy Quesadillas & Churros",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (1,890+ orders)",
        prepBay: "Bay 12 - Shared High-Capacity Flat Top Range",
        prepStation: "Bay 12 - Shared High-Capacity Flat Top Range",
        packagingTag: "Foil clamshell with plastic consume dipping tub",
        claimedAddress: "42 Expressway Road, Suite T-1, Gbagada, Lagos"
      },
      {
        name: "Wing Dynasty 24/7",
        aliases: ["Wing Dynasty Gbagada", "Wing Dynasty Lagos", "Wing Dynasty"],
        cuisine: "Atomic Ghost Pepper Wings & Garlic Parmesan Tenders",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.5 ★ (2,750+ orders)",
        prepBay: "Bay 12 - Deep Fryer Vat Battery A & B",
        prepStation: "Bay 12 - Deep Fryer Vat Battery A & B",
        packagingTag: "Vented kraft paper chicken box with red ink stamp",
        claimedAddress: "42 Expressway Road, Unit 12B, Gbagada, Lagos"
      },
      {
        name: "Shawarma Beast Gbagada",
        aliases: ["Shawarma Beast", "The Shawarma Beast", "Beast Shawarma Gbagada"],
        cuisine: "Triple-Wrapped Beef Shawarma, Suya Spiced Sausages",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.7 ★ (3,100+ orders)",
        prepBay: "Bay 12 - Vertical Doner & Shawarma Spit Unit",
        prepStation: "Bay 12 - Vertical Doner & Shawarma Spit Unit",
        packagingTag: "Silver thermal foil wrap with yellow rubber band",
        claimedAddress: "42 Expressway Service Road, Gbagada, Lagos"
      },
      {
        name: "Seoul Fried Chicken Co",
        aliases: ["Seoul Chicken Gbagada", "Seoul Fried Chicken Lagos", "Seoul Fried Chicken"],
        cuisine: "Korean Double-Fried Gochujang Wings & Radish Slaw",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (2,200+ orders)",
        prepBay: "Bay 12 - Deep Fryer Vat Battery A & B",
        prepStation: "Bay 12 - Deep Fryer Vat Battery A & B",
        packagingTag: "Korean style graphic cardboard box with side sauce cup",
        claimedAddress: "42 Expressway Road, Gbagada, Lagos"
      },
      {
        name: "The Mac & Cheese Melt Factory",
        aliases: ["Mac & Cheese Factory", "Melt Factory Gbagada", "The Mac Factory"],
        cuisine: "Loaded 4-Cheese Macaroni, Crispy Bacon Melt Bowls",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.4 ★ (1,150+ orders)",
        prepBay: "Bay 12 - Shared High-Capacity Flat Top Range",
        prepStation: "Bay 12 - Shared High-Capacity Flat Top Range",
        packagingTag: "Round aluminum baker dish with cardboard lid",
        claimedAddress: "42 Expressway Road, Gbagada, Lagos"
      },
      {
        name: "Cloud Crepes & Midnight Waffles",
        aliases: ["Cloud Crepes Gbagada", "Midnight Waffles Lagos", "Cloud Crepes"],
        cuisine: "Nutella Stuffed Belgian Waffles & Sweet Crepe Rolls",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.3 ★ (890+ orders)",
        prepBay: "Bay 12 - Beverage Dispenser & Dessert Island",
        prepStation: "Bay 12 - Beverage Dispenser & Dessert Island",
        packagingTag: "Triangular cardboard crepe sleeve and syrup cups",
        claimedAddress: "42 Expressway Road, Gbagada, Lagos"
      },
      {
        name: "Bubble Tea & Boba Laboratory",
        aliases: ["Boba Lab Gbagada", "Bubble Tea Lab Lagos", "Boba Laboratory"],
        cuisine: "Brown Sugar Boba Milk Tea, Mango Popping Pearls",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.5 ★ (1,480+ orders)",
        prepBay: "Bay 12 - Beverage Dispenser & Dessert Island",
        prepStation: "Bay 12 - Beverage Dispenser & Dessert Island",
        packagingTag: "Heat-sealed plastic cup with wide bobba straw",
        claimedAddress: "42 Expressway Road, Gbagada, Lagos"
      }
    ]
  },

  // ==========================================
  // 37. VORTEX COMMISSARY - MARINA WHARF (6 Virtual Brands)
  // ==========================================
  {
    id: "fac-marina-ghost-12",
    facilityCode: "LOS-ISL-GHOST-12",
    facilityName: "Vortex Dark Commissary - Marina Wharf Shed 4",
    operator: "Vortex Culinary Cloud Group Ltd",
    registeredBays: [
      "Unit W-4 - Double Smashed Patty Griddle",
      "Unit W-4 - Heavy Stockpot Rice Steamers",
      "Unit W-4 - Bamboo Steamer Tier Stack",
      "Unit W-4 - Deck Pizza Oven & Cold Prep"
    ],
    address: "Customs Wharf Shed 4, Marina, Lagos Island, Lagos",
    area: "Lagos Island",
    city: "lagos",
    coordinates: { lat: 6.4521, lng: 3.3912 },
    facilityType: "Subdivided Port Commissary & Dark Delivery Station",
    ghostIndexScore: 95,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "6 high-turnover virtual brands located in an industrial wharf shed with shared food storage and courier dispatch dock.",
    inspectionStatus: "Notice to Rectify Storage Temperature (LSSC #ISL-7740)",
    sanitationGrade: "C",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-29",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Industrial Port Food Processing Permit #ISL-VOR-2024",
    sharedExtraction: true,
    sharedEquipment: ["Heavy Stockpot Steam Array", "Single Commercial Cold Room #4", "Garland Flat Top Griddle"],
    brands: [
      {
        name: "Portside Smashed Burgers",
        aliases: ["Portside Burgers", "Marina Smashed Burger", "Portside Burger Co"],
        cuisine: "Double Smashed Wagyu Blend Patties & Onion Rings",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (2,100+ orders)",
        prepBay: "Unit W-4 - Double Smashed Patty Griddle",
        prepStation: "Unit W-4 - Double Smashed Patty Griddle",
        packagingTag: "Brown craft burger carton with maritime stamp",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      },
      {
        name: "Marina Wharf Biryani Pot",
        aliases: ["Marina Biryani", "Wharf Biryani Lagos", "Marina Biryani Pot"],
        cuisine: "Spiced Hyderabadi Chicken Biryani & Mirchi Ka Salan",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.5 ★ (1,540+ orders)",
        prepBay: "Unit W-4 - Heavy Stockpot Rice Steamers",
        prepStation: "Unit W-4 - Heavy Stockpot Rice Steamers",
        packagingTag: "Clay-colored paper tub with raita plastic cups",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      },
      {
        name: "Neon Bao Bun Collective",
        aliases: ["Neon Bao Lagos", "Bao Bun Collective Marina", "Neon Bao"],
        cuisine: "Braised Pork Belly, Spicy Crispy Chicken & Tofu Bao",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.7 ★ (1,820+ orders)",
        prepBay: "Unit W-4 - Bamboo Steamer Tier Stack",
        prepStation: "Unit W-4 - Bamboo Steamer Tier Stack",
        packagingTag: "Glossy neon cardboard slider box with parchment lining",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      },
      {
        name: "Dockside Pizza Express",
        aliases: ["Dockside Pizza", "Marina Pizza Express", "Dockside Wood Pizza"],
        cuisine: "12-inch Neapolitan Style Thin Crust Pepperoni & Garlic Knots",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.4 ★ (2,300+ orders)",
        prepBay: "Unit W-4 - Deck Pizza Oven & Cold Prep",
        prepStation: "Unit W-4 - Deck Pizza Oven & Cold Prep",
        packagingTag: "Unprinted brown corrugated pizza box",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      },
      {
        name: "Lagos Island Salad Press",
        aliases: ["Island Salad Press", "Salad Press Marina", "Lagos Salad Press"],
        cuisine: "Keto Protein Bowls, Kale Caesar & Cold-Pressed Juices",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (960+ orders)",
        prepBay: "Unit W-4 - Deck Pizza Oven & Cold Prep",
        prepStation: "Unit W-4 - Deck Pizza Oven & Cold Prep",
        packagingTag: "Clear biodegradable PLA bowl with sticker seal",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      },
      {
        name: "The Dirty Fries Guild",
        aliases: ["Dirty Fries Guild", "Dirty Fries Lagos", "The Dirty Fries"],
        cuisine: "Pulled Beef Dirty Loaded Crinkle Cut Fries & Cheese Sauce",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (1,700+ orders)",
        prepBay: "Unit W-4 - Double Smashed Patty Griddle",
        prepStation: "Unit W-4 - Double Smashed Patty Griddle",
        packagingTag: "Greaseproof kraft fry carton with fork and wet wipe",
        claimedAddress: "Wharf Shed 4, Marina, Lagos Island, Lagos"
      }
    ]
  },

  // ==========================================
  // 38. DARK HIVE - FESTAC 2ND AVE (8 Virtual Brands)
  // ==========================================
  {
    id: "fac-festac-ghost-13",
    facilityCode: "LOS-FES-GHOST-13",
    facilityName: "Dark Hive Prep Complex - Festac Subdivided Bay 2",
    operator: "Hive Cloud Kitchen Infrastructure Ltd",
    registeredBays: [
      "Compartment F-2 - Commercial Deep Fryer Vat 1 & 2",
      "Compartment F-2 - Heavy Gas Griddle Table",
      "Compartment F-2 - Large Stockpot Soup Boil Line",
      "Compartment F-2 - Single Rotating Spit & Baker Unit"
    ],
    address: "Plot 302, 2nd Avenue, Festac Town, Lagos",
    area: "Festac Town",
    city: "lagos",
    coordinates: { lat: 6.4691, lng: 3.2874 },
    facilityType: "Ultra-Dense Subdivided Dark Commissary Cell",
    ghostIndexScore: 99,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "8 virtual brands cramming into a 32m² subdivided compartment behind a shuttered storefront. Maximum co-location risk.",
    inspectionStatus: "Severe Overcrowding & Ventilation Notice (LSSC #FES-HIVE-99)",
    sanitationGrade: "D-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-09-12",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Restricted Commissary Permit #FES-2024-9901",
    sharedExtraction: true,
    sharedEquipment: ["Pitco 2-Vat Fryer", "Vulcan 36-inch Griddle", "Unox Countertop Convection Oven", "Single Shawarma Spit"],
    brands: [
      {
        name: "Festac Wing Society",
        aliases: ["Festac Wings", "Wing Society Festac", "Festac Wing Co"],
        cuisine: "Ghost Pepper Wings, Lemon Pepper Tenders & Cajun Fries",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.5 ★ (2,100+ orders)",
        prepBay: "Compartment F-2 - Commercial Deep Fryer Vat 1 & 2",
        prepStation: "Compartment F-2 - Commercial Deep Fryer Vat 1 & 2",
        packagingTag: "Generic brown paper bag with sticker stamp",
        claimedAddress: "Plot 302, 2nd Avenue, Suite 10, Festac Town, Lagos"
      },
      {
        name: "Asun Box 24/7 Express",
        aliases: ["Asun Box Festac", "Asun Box 24/7", "Asun Box Express"],
        cuisine: "Fiery Peppered Goat Meat Asun & Crispy Fried Yam",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.7 ★ (3,600+ orders)",
        prepBay: "Compartment F-2 - Heavy Gas Griddle Table",
        prepStation: "Compartment F-2 - Heavy Gas Griddle Table",
        packagingTag: "Foil takeaway box with toothpick and lime slice",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "Calabar Pot Online Delivery",
        aliases: ["Calabar Pot Festac", "Calabar Pot Delivery", "Calabar Pot Online"],
        cuisine: "Afang Soup, Edikang Ikong, Pounded Yam & Stockfish",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.4 ★ (1,850+ orders)",
        prepBay: "Compartment F-2 - Large Stockpot Soup Boil Line",
        prepStation: "Compartment F-2 - Large Stockpot Soup Boil Line",
        packagingTag: "Dual plastic soup tub with plastic wrap seal",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "Sando Syndicate Lagos",
        aliases: ["Sando Syndicate", "Sando Syndicate Festac", "Sando Lagos"],
        cuisine: "Japanese Chicken Katsu Sandos & Tamagoyaki Egg Sandwiches",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.6 ★ (1,220+ orders)",
        prepBay: "Compartment F-2 - Commercial Deep Fryer Vat 1 & 2",
        prepStation: "Compartment F-2 - Commercial Deep Fryer Vat 1 & 2",
        packagingTag: "Clear plastic sandwich wedge with Japanese typography",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "The Waffle & Pancake Grid",
        aliases: ["Waffle Grid Festac", "Pancake Grid Lagos", "The Waffle Grid"],
        cuisine: "Crispy Fried Chicken with Waffles & Maple Pancakes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.3 ★ (950+ orders)",
        prepBay: "Compartment F-2 - Heavy Gas Griddle Table",
        prepStation: "Compartment F-2 - Heavy Gas Griddle Table",
        packagingTag: "Flat cake box with syrup cups taped inside",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "Crust & Crumb Dark Bakery",
        aliases: ["Crust & Crumb Festac", "Crust & Crumb Bakery", "Crust & Crumb"],
        cuisine: "Cinnamon Buns, Sausage Meat Rolls & Glazed Doughnut Boxes",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Glovo"],
        platformRating: "4.5 ★ (1,400+ orders)",
        prepBay: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        prepStation: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        packagingTag: "White windowed bakery box with thermal dispatch barcode",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "Loaded Spud & Potato Hub",
        aliases: ["Loaded Spud Festac", "Potato Hub Lagos", "Loaded Spud"],
        cuisine: "Overloaded Jacket Potatoes with Cheese, Bacon & Sour Cream",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.2 ★ (680+ orders)",
        prepBay: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        prepStation: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        packagingTag: "Insulated silver foil pouch",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      },
      {
        name: "Midnight Shawarma Mafia",
        aliases: ["Shawarma Mafia Festac", "Midnight Shawarma", "Shawarma Mafia"],
        cuisine: "Double Sausage Jumbo Shawarma with Extra Cream",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦",
        platforms: ["Chowdeck", "Bolt Food", "Glovo"],
        platformRating: "4.6 ★ (2,890+ orders)",
        prepBay: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        prepStation: "Compartment F-2 - Single Rotating Spit & Baker Unit",
        packagingTag: "Foil shawarma wrap with plain plastic bag",
        claimedAddress: "Plot 302, 2nd Avenue, Festac Town, Lagos"
      }
    ]
  },

  // ==========================================
  // 39. BOURDILLON MICRO-COMMISSARY - IKOYI (5 Virtual Brands)
  // ==========================================
  {
    id: "fac-ikoyi-ghost-14",
    facilityCode: "LOS-IKY-GHOST-14",
    facilityName: "Bourdillon Dark Commissary Hive - Unit 8B",
    operator: "Bourne Dark Hospitality Labs Ltd",
    registeredBays: [
      "Unit 8B - Chrome High-Heat Burger Griddle",
      "Unit 8B - Bamboo Dim Sum Steamer Station",
      "Unit 8B - Cold Prep & Microgreen Assembly Counter",
      "Unit 8B - Vertical Veal Rotisserie Spit"
    ],
    address: "28 Bourdillon Road, Ikoyi, Lagos",
    area: "Ikoyi",
    city: "lagos",
    coordinates: { lat: 6.4489, lng: 3.4412 },
    facilityType: "Premium Residential District Dark Kitchen Unit",
    ghostIndexScore: 94,
    riskLevel: "CRITICAL GHOST HIVE",
    riskSummary: "5 high-priced virtual brands operating inside an enclosed basement suite on Bourdillon Road with zero walk-in presence.",
    inspectionStatus: "Commercial Operation in Mixed Zoning Under Review (LSSC #IKY-BD-88)",
    sanitationGrade: "B-",
    dineInAvailable: false,
    dineInCapacity: 0,
    lastInspected: "2024-10-01",
    regulatoryBody: "NAFDAC & Lagos State Safety Commission",
    activePermits: "Micro-Commissary Food License #IKY-HIVE-2024",
    sharedExtraction: true,
    sharedEquipment: ["Chrome Flat Griddle", "Multi-Tier Dim Sum Steamer", "Walk-In Reach Refrigeration Bay"],
    brands: [
      {
        name: "Bourdillon Truffle Burger Co",
        aliases: ["Bourdillon Burger", "Truffle Burger Ikoyi", "Bourdillon Burger Co"],
        cuisine: "Wagyu Smashed Beef, Truffle Aioli & Brioche Buns",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck", "Takeaway Dispatch"],
        platformRating: "4.8 ★ (1,950+ orders)",
        prepBay: "Unit 8B - Chrome High-Heat Burger Griddle",
        prepStation: "Unit 8B - Chrome High-Heat Burger Griddle",
        packagingTag: "Matte black box with gold foil lettering",
        claimedAddress: "28 Bourdillon Road, Ikoyi, Lagos"
      },
      {
        name: "Silk Road Dumpling House",
        aliases: ["Silk Road Dumplings", "Silk Road Ikoyi", "Dumpling House Lagos"],
        cuisine: "Artisanal Pork & Prawn Xiao Long Bao & Gyoza",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.7 ★ (1,120+ orders)",
        prepBay: "Unit 8B - Bamboo Dim Sum Steamer Station",
        prepStation: "Unit 8B - Bamboo Dim Sum Steamer Station",
        packagingTag: "Bamboo textured cardboard box with chili crisp jar",
        claimedAddress: "28 Bourdillon Road, Ikoyi, Lagos"
      },
      {
        name: "Clean Greens Detox Bar",
        aliases: ["Clean Greens Ikoyi", "Clean Greens Lagos", "Clean Greens Detox"],
        cuisine: "Cold Pressed Celery Juices & Organic Superfood Acai Bowls",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck", "Bolt Food"],
        platformRating: "4.6 ★ (880+ orders)",
        prepBay: "Unit 8B - Cold Prep & Microgreen Assembly Counter",
        prepStation: "Unit 8B - Cold Prep & Microgreen Assembly Counter",
        packagingTag: "Glass apothecary bottle and molded fiber bowl",
        claimedAddress: "28 Bourdillon Road, Ikoyi, Lagos"
      },
      {
        name: "Royal Ikoyi Shawarma Atelier",
        aliases: ["Royal Ikoyi Shawarma", "Shawarma Atelier Lagos", "Royal Shawarma Ikoyi"],
        cuisine: "Spiced Milk-Fed Veal Shawarma & Truffle Toum",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.7 ★ (1,450+ orders)",
        prepBay: "Unit 8B - Vertical Veal Rotisserie Spit",
        prepStation: "Unit 8B - Vertical Veal Rotisserie Spit",
        packagingTag: "Embossed black thermal wrap with gold closure seal",
        claimedAddress: "28 Bourdillon Road, Ikoyi, Lagos"
      },
      {
        name: "Midnight Wagyu Donburi",
        aliases: ["Midnight Wagyu Ikoyi", "Wagyu Donburi Lagos", "Midnight Donburi"],
        cuisine: "Japanese Seared Wagyu Beef Over Sushi Rice & Onsen Egg",
        isVirtual: true,
        virtual: true,
        priceTier: "₦₦₦₦",
        platforms: ["Chowdeck"],
        platformRating: "4.9 ★ (1,670+ orders)",
        prepBay: "Unit 8B - Chrome High-Heat Burger Griddle",
        prepStation: "Unit 8B - Chrome High-Heat Burger Griddle",
        packagingTag: "Lacquered style thermal bowl with sealed lid",
        claimedAddress: "28 Bourdillon Road, Ikoyi, Lagos"
      }
    ]
  }
];

const {
  calabarFacilities,
  abujaFacilities,
  portHarcourtFacilities,
  ibadanFacilities
} = require('./regional-facilities');

const allFacilities = [
  ...facilities,
  ...calabarFacilities,
  ...abujaFacilities,
  ...portHarcourtFacilities,
  ...ibadanFacilities
];

module.exports = allFacilities;
