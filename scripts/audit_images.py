"""Inventário de imagens ArtMusic: usadas no HTML vs órfãs."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "index.html"
IMAGES = ROOT / "assets" / "images"
IMG_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"}


def main() -> None:
    html = HTML.read_text(encoding="utf-8")
    refs = set(
        re.findall(
            r"assets/images/([\w./-]+\.(?:jpg|jpeg|png|webp|gif|svg))",
            html,
            re.I,
        )
    )
    all_files = sorted(
        p
        for p in IMAGES.rglob("*")
        if p.is_file() and p.suffix.lower() in IMG_EXT
    )

    used: list[Path] = []
    orphan: list[Path] = []
    for path in all_files:
        rel = path.relative_to(IMAGES).as_posix()
        if rel in refs:
            used.append(path)
        else:
            orphan.append(path)

    def mb(paths: list[Path]) -> float:
        return round(sum(p.stat().st_size for p in paths) / 1e6, 2)

    print(f"USED {len(used)}  MB {mb(used)}")
    for p in used:
        print(f"  {p.relative_to(IMAGES).as_posix()}")
    print(f"ORPHAN {len(orphan)}  MB {mb(orphan)}")
    for p in orphan:
        print(f"  {p.relative_to(IMAGES).as_posix()}")
    print(f"TOTAL {len(all_files)}  MB {mb(all_files)}")


if __name__ == "__main__":
    main()
