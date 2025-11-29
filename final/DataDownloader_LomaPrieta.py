import pandas as pd
import requests
import time
import os

BASE_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query"

# Loma Prieta / Central–Northern California window
LOMA_PRIETA_BOUNDS = {
    "lat_min": 35.0,
    "lat_max": 39.5,
    "lon_min": -124.0,
    "lon_max": -120.0,
}

# Time window: mid-1988 through mid-1990
# Split into shorter chunks to avoid any USGS result limits
DATE_RANGES = [
    ("1988-06-01", "1988-12-31"),
    ("1989-01-01", "1989-06-30"),
    ("1989-07-01", "1989-12-31"),
    ("1990-01-01", "1990-06-30"),
]


def download_earthquakes(start_date, end_date,
                         lat_min, lat_max, lon_min, lon_max,
                         min_mag=0.0):
    """
    Download earthquakes from USGS FDSN in CSV format for a given
    bounding box and time range.
    """
    params = {
        "format": "csv",
        "starttime": start_date,
        "endtime": end_date,
        "minmagnitude": min_mag,
        "minlatitude": lat_min,
        "maxlatitude": lat_max,
        "minlongitude": lon_min,
        "maxlongitude": lon_max,
        "orderby": "time",
    }

    print(f"  {start_date} to {end_date}...", end=" ")

    try:
        resp = requests.get(BASE_URL, params=params, timeout=30)

        if resp.status_code == 200:
            # Count lines minus header + trailing blank
            line_count = max(0, len(resp.text.split("\n")) - 2)
            print(f"✓ {line_count} earthquakes")
            return resp.text
        else:
            print(f"✗ Error {resp.status_code}")
            return None
    except Exception as e:
        print(f"✗ Exception: {e}")
        return None


def main():
    print("Downloading ALL magnitudes for the Loma Prieta region")
    print("Time window: 1988-06-01 to 1990-06-30")
    print(f"Bounds: lat [{LOMA_PRIETA_BOUNDS['lat_min']}, {LOMA_PRIETA_BOUNDS['lat_max']}], "
          f"lon [{LOMA_PRIETA_BOUNDS['lon_min']}, {LOMA_PRIETA_BOUNDS['lon_max']}]")
    print("=" * 70)

    all_chunks = []

    for i, (start, end) in enumerate(DATE_RANGES, 1):
        print(f"\n[{i}/{len(DATE_RANGES)}] {start} to {end}:")
        csv_text = download_earthquakes(
            start,
            end,
            LOMA_PRIETA_BOUNDS["lat_min"],
            LOMA_PRIETA_BOUNDS["lat_max"],
            LOMA_PRIETA_BOUNDS["lon_min"],
            LOMA_PRIETA_BOUNDS["lon_max"],
            min_mag=0.0,  # ALL magnitudes
        )

        if csv_text:
            all_chunks.append(csv_text)

        time.sleep(1)  # short pause between chunks

    print(f"\n{'=' * 70}")
    print("Processing and combining data...")
    print("=" * 70)

    if not all_chunks:
        print("✗ No data downloaded successfully")
        return

    # Start with first dataset (has header)
    combined_text = all_chunks[0]
    for csv_text in all_chunks[1:]:
        lines = csv_text.split("\n")
        if len(lines) > 1:
            # Skip header line, add data
            combined_text += "\n" + "\n".join(lines[1:])

    # Write temp CSV so pandas can read it
    temp_path = "temp_lomaprieta_combined.csv"
    with open(temp_path, "w", encoding="utf-8") as f:
        f.write(combined_text)

    df = pd.read_csv(temp_path)
    print(f"  Raw total: {len(df):,} earthquakes")

    # Remove duplicates by time + location + mag
    df = df.drop_duplicates(subset=["time", "latitude", "longitude", "mag"])
    print(f"  After deduplication: {len(df):,} earthquakes")

    # Add a region column for compatibility with your existing code
    # (everything here is in the conterminous US)
    df["region"] = "Conterminous US"

    # Sort chronologically
    df = df.sort_values("time")

    out_path = "../dataset/us_loma_prieta_1988_1990_allmags.csv"
    df.to_csv(out_path, index=False)

    print(f"\n{'=' * 70}")
    print("✓ SUCCESS!")
    print("=" * 70)
    print(f"Total earthquakes (all magnitudes): {len(df):,}")
    print(f"Date range in file: {df['time'].min()} → {df['time'].max()}")
    print(f"Magnitude range: {df['mag'].min():.2f} → {df['mag'].max():.2f}")
    print(f"\nSaved as: {out_path}")
    print("=" * 70)

    os.remove(temp_path)


if __name__ == "__main__":
    main()
