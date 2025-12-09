// media_tracks.js
// Curated multimedia tracks for Loma Prieta Story Mode.
// Each item uses a symbolic `anchor` plus an optional `offsetDays`.
// final_story-mode.html converts these into actual day indices.

window.MEDIA_TRACKS_DATA = [
  // 1. Live TV / overview
  {
    id: "broadcasts-overview",
    label: "Live broadcasts & overview",
    items: [
      {
        id: "world-series-quake-moment",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "World Series broadcast – quake moment",
        caption:
          "ABC’s World Series Game 3 pre-game show at Candlestick Park captures the exact 5:04:15 PM quake moment before the feed abruptly cuts.",
        href:
          "https://archive.org/download/videoplayback-2021-02-08-t-170217.759/videoplayback%20-%202021-02-08T170217.759.mp4",
        source:
          "Source: ABC World Series Game 3 broadcast, via Revelation Video on Internet Archive."
      },
      {
        id: "kgo-live-coverage",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "KGO-TV six-hour live coverage",
        caption:
          "San Francisco’s KGO-TV airs six continuous hours of breaking news starting at 5:04 PM, following damage reports from across the Bay into the night.",
        href:
          "https://archive.org/download/1989BayAreaEarthquake/videoplayback.mp4",
        source:
          "Source: KGO-TV/ABC San Francisco, six-hour live earthquake special, via Internet Archive."
      },
      {
        id: "fema-documentary",
        anchor: "aftershockStart",
        offsetDays: 2,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "FEMA / National Archives documentary",
        caption:
          "Official federal documentary showing Candlestick Park, collapsed freeways, and emergency response in Oakland, San Francisco, and Santa Cruz after the quake.",
        href:
          "https://archive.org/download/gov.archives.arc.951729/gov.archives.arc.951729_512kb.mp4",
        source:
          "Source: FEMA National Emergency Training Center and U.S. National Archives (ARC 951729), Public Domain."
      },
      {
        id: "usgs-index-map",
        anchor: "rebuildingStart",
        offsetDays: 0,
        stageId: "rebuilding",
        stageLabel: "Rebuilding",
        title: "USGS damage-photo index map",
        caption:
          "USGS DDS-29 index map locating all 103 documented damage-photo sites from San Francisco through the Monterey Bay region.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/001sr.jpeg",
        source:
          "Source: U.S. Geological Survey, Digital Data Series DDS-29 (Image 001), Public Domain."
      }
    ]
  },

  // 2. Freeways & bridges
  {
    id: "infrastructure-damage",
    label: "Freeways & bridges",
    items: [
      {
        id: "cypress-viaduct-collapse",
        anchor: "aftershockStart",
        offsetDays: 0,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Cypress Street Viaduct collapse",
        caption:
          "USGS photo of the collapsed double-deck I-880 Cypress Structure in Oakland, where 42 people died when the upper deck pancaked onto the lower deck.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/017sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 017), photo by H.G. Wilshire, Public Domain."
      },
      {
        id: "bay-bridge-span-failure",
        anchor: "aftershockStart",
        offsetDays: 1,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Bay Bridge span failure",
        caption:
          "San Francisco–Oakland Bay Bridge with a 50-foot upper deck section collapsed onto the lower deck, killing one driver and closing the bridge for a month.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/014sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 014), Public Domain."
      },
      {
        id: "freeway-infrastructure-damage",
        anchor: "rebuildingStart",
        offsetDays: 5,
        stageId: "rebuilding",
        stageLabel: "Rebuilding",
        title: "California freeway infrastructure damage",
        caption:
          "Documentation of damaged elevated freeway structures, illustrating how unretrofitted concrete and columns performed during strong shaking.",
        href:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/EarthquakeFreewayCa1989.jpg",
        source:
          "Source: Government freeway damage photograph, via Wikimedia Commons."
      }
    ]
  },

  // 3. Marina District & fires
  {
    id: "marina-district",
    label: "Marina District & fires",
    items: [
      {
        id: "marina-amateur-footage",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "Marina District handheld video",
        caption:
          "Handheld footage from the Marina District minutes after the quake: cracked pavement, leaning buildings, and smoke from gas-fed fires.",
        href:
          "https://archive.org/download/1989.Loma.Prieta.Earthquake.Marina.District/1989.Loma.Prieta.Earthquake.Marina.District_512kb.mp4",
        source:
          "Source: Michael Joseph Woody, Marina District footage, via Internet Archive."
      },
      {
        id: "marina-liquefaction-damage",
        anchor: "mainshock",
        offsetDays: 0.3,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "Typical Marina liquefaction damage",
        caption:
          "Typical Marina District liquefaction damage, with a corner building tilting as soft landfill soil fails beneath it.",
        href:
          "https://upload.wikimedia.org/wikipedia/commons/3/35/Typical_liquefaction_damage_in_the_Marina_District_of_San_Francisco_1989.jpg",
        source:
          "Source: U.S. Geological Survey, “Typical liquefaction damage in the Marina District of San Francisco, 1989”, Public Domain."
      },
      {
        id: "marina-beach-divisadero",
        anchor: "aftershockStart",
        offsetDays: 0,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Beach & Divisadero soft-story collapse",
        caption:
          "Soft-story apartment building at Beach and Divisadero Streets partially collapsed onto parked cars, a classic example of amplified shaking on fill.",
        href:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Damage_to_apartment_building_at_Beach_and_Divisadero_Streets_from_the_1989_Loma_Prieta_Earthquake.jpg",
        source:
          "Source: U.S. Geological Survey, Beach and Divisadero damage photo, Public Domain."
      },
      {
        id: "marina-spectators",
        anchor: "aftershockStart",
        offsetDays: 1,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Marina residents return to damaged blocks",
        caption:
          "Residents and onlookers stand among damaged buildings in San Francisco’s Marina District the morning after the earthquake.",
        href:
          "https://upload.wikimedia.org/wikipedia/commons/7/75/Spectators_observe_damage_in_San_Francisco%27s_Marina_District_a_day_after_the_Loma_Prieta_Earthquake.jpg",
        source:
          "Source: U.S. Geological Survey, Marina District spectators photo, Public Domain."
      },
      {
        id: "marina-fire-dds29",
        anchor: "aftershockStart",
        offsetDays: 0.1,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Marina fire and collapse (USGS DDS-29)",
        caption:
          "USGS image of collapsed buildings and fire response at Beach and Divisadero, one of the defining photos of Marina District damage.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/002sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 002), photo by J.K. Nakata, Public Domain."
      }
    ]
  },

  // 4. Santa Cruz & epicenter region
  {
    id: "santa-cruz-epicenter",
    label: "Santa Cruz & epicenter",
    items: [
      {
        id: "santa-cruz-tv-report",
        anchor: "aftershockStart",
        offsetDays: 0,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Santa Cruz downtown TV report",
        caption:
          "News report from downtown Santa Cruz documenting collapsed storefronts, rescue work, and damage near the epicenter.",
        href:
          "https://archive.org/download/youtube-1GV5BsCt0ZQ/1GV5BsCt0ZQ.mp4",
        source:
          "Source: CBS 8 San Diego archival news report, via Internet Archive."
      },
      {
        id: "pacific-garden-mall",
        anchor: "aftershockStart",
        offsetDays: 0.2,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Pacific Garden Mall destruction",
        caption:
          "USGS photograph of ruined unreinforced masonry buildings in Santa Cruz’s Pacific Garden Mall, where several people were killed.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/084sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 084), photo by C.E. Meyer, Public Domain."
      },
      {
        id: "summit-road-damage",
        anchor: "aftershockStart",
        offsetDays: 0.5,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Summit Road near the epicenter",
        caption:
          "Damage along Summit Road in the Santa Cruz Mountains, one of the closest documented locations to the Loma Prieta epicenter.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/062sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 062), Public Domain."
      },
      {
        id: "moss-landing-liquefaction",
        anchor: "aftershockStart",
        offsetDays: 2,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Moss Landing liquefaction damage",
        caption:
          "Severe liquefaction at Moss Landing, with ground cracks and damaged structures in saturated coastal sands.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/098sr.jpeg",
        source:
          "Source: U.S. Geological Survey, DDS-29 (Image 098), Public Domain."
      },
      {
        id: "highway-landslide",
        anchor: "aftershockStart",
        offsetDays: 1,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Landslide debris on mountain highway",
        caption:
          "Landslide debris blocking a highway in the Santa Cruz Mountains, illustrating rockfall and slope failures triggered by the quake.",
        href:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/USGS_-_1989_Loma_Prieta_earthquake_-_Landslide_Debris_on_Highway.jpg",
        source:
          "Source: U.S. Geological Survey, “Landslide debris on highway” photo, Public Domain."
      }
    ]
  },

  // 5. Voices & radio
  {
    id: "voices-radio",
    label: "Voices & radio",
    items: [
      {
        id: "jack-buck-candlestick",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "Jack Buck radio call at Candlestick",
        caption:
          "CBS radio announcer Jack Buck describes the scene at Candlestick Park seconds after the shaking stops, with over 60,000 fans in the stadium.",
        href: "https://archive.org/download/LomaPrietaQuake_551/buckloma.ogg",
        source:
          "Source: CBS Radio Sports, Jack Buck World Series broadcast from Candlestick Park, via Internet Archive."
      },
      {
        id: "marina-police-radio",
        anchor: "mainshock",
        offsetDays: 0.2,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Police radio into the Marina District",
        caption:
          "Police radio traffic from officers heading into the Marina District, relaying fires, gas leaks, and building collapses in real time.",
        href: "https://archive.org/download/LomaPrietaQuake_551/lomacop.ogg",
        source:
          "Source: Loma Prieta police radio recording, via Internet Archive."
      },
      {
        id: "allan-lindh-usgs-audio",
        anchor: "aftershockStart",
        offsetDays: 5,
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "USGS geologist Allan Lindh explains the quake",
        caption:
          "USGS geologist Allan Lindh discusses the San Andreas Fault segment that ruptured and why the quake produced such widespread damage.",
        href: "https://archive.org/download/LomaPrietaQuake_551/allanlindh.ogg",
        source:
          "Source: U.S. Geological Survey audio interview with Allan Lindh, via Internet Archive."
      },
      {
        id: "caltrans-whipple-oral-history",
        anchor: "rebuildingStart",
        offsetDays: 0,
        stageId: "rebuilding",
        stageLabel: "Rebuilding",
        title: "Caltrans Cypress rescue oral history",
        caption:
          "Caltrans engineer Steve Whipple recalls discovering survivor Buck Helm and coordinating rescue operations inside the collapsed Cypress Structure.",
        href:
          "https://archive.org/download/casadt_000223/casadt_000223_a_access.mp3",
        source:
          "Source: California Department of Transportation, Loma Prieta Oral History Project (Steve Whipple), via Internet Archive."
      }
    ]
  }
];
