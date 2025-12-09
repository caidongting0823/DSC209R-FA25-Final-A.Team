// media_tracks.js
// Simple, data-only description of story media.
// Each item uses a symbolic `anchor` plus an optional `offsetDays`.
// final_story-mode.html will convert these into actual day indices.

window.MEDIA_TRACKS_DATA = [
  {
    id: "broadcast-overview",
    label: "Live broadcast & overview",
    items: [
      {
        id: "world-series-broadcast",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "World Series broadcast interrupted",
        caption:
          "ABC’s live World Series pre-game is cut off at 5:04 PM PDT as the quake hits Candlestick Park.",
        href: "https://archive.org/details/gov.archives.arc.951729"
      },
      {
        id: "usgs-index-map",
        anchor: "rebuildingStart",
        offsetDays: 0,
        stageId: "rebuilding",
        stageLabel: "Rebuilding",
        title: "USGS damage photo index",
        caption:
          "USGS DDS-29 index map showing documented damage-photo locations across the Bay Area.",
        href: "https://pubs.usgs.gov/dds/dds-29/screens/001sr.jpeg"
      }
    ]
  },
  {
    id: "infrastructure-damage",
    label: "Freeways & bridges",
    items: [
      {
        id: "cypress-viaduct-collapse",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "Cypress Viaduct collapse, Oakland",
        caption:
          "Aerial USGS view of the collapsed double-deck I-880 Cypress Street Viaduct where many fatalities occurred.",
        href: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/LomaPrieta1989img0019Cypress.jpg"
      }
    ]
  },
  {
    id: "marina-district",
    label: "Marina District damage",
    items: [
      {
        id: "marina-building-collapse",
        anchor: "mainshock",
        offsetDays: 0,
        stageId: "mainshock",
        stageLabel: "Main shock",
        title: "Marina District building collapse",
        caption:
          "USGS image of a collapsed Marina District apartment building resting on a crushed car on filled ground.",
        href: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/SFLomaPrietaMarinaDistrict.jpg"
      },
      {
        id: "marina-fire",
        anchor: "aftershockStart",
        offsetDays: 1, // roughly the next day
        stageId: "aftershocks",
        stageLabel: "Aftershocks",
        title: "Marina District fire & gas-fed blaze",
        caption:
          "USGS photo of fire and collapsed buildings at Beach and Divisadero after gas lines ignited.",
        href: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/LomaPrietaSFDivisideroCollapseMeyer.jpg"
      }
    ]
  }
];
