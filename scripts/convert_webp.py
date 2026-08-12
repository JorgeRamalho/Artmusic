"""Gera WebP das imagens ativas (exclui _archive)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "assets" / "images"
SKIP = {"_archive"}
QUALITY = 78


def main() -> None:
    count = 0
    for jpg in ROOT.rglob("*.jpg"):
        if any(part in SKIP for part in jpg.parts):
            continue
        out = jpg.with_suffix(".webp")
        with Image.open(jpg) as im:
            im.convert("RGB").save(out, "WEBP", quality=QUALITY, method=6)
        before = jpg.stat().st_size
        after = out.stat().st_size
        print(f"{jpg.relative_to(ROOT)}  {before // 1024}KB -> {after // 1024}KB")
        count += 1
    print(f"Done: {count} webp files")


if __name__ == "__main__":
    main()
