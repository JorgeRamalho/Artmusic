#!/usr/bin/env python3
"""Smoke check estático do ArtMusic (Sprint 2 / S2-03).

Uso:
  python scripts/smoke_check.py
  python scripts/smoke_check.py --url http://127.0.0.1:5500/index.html
"""
from __future__ import annotations

import argparse
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_html(url: str | None) -> str:
    if url:
        with urllib.request.urlopen(url, timeout=15) as res:
            return res.read().decode("utf-8", errors="replace")
    return (ROOT / "index.html").read_text(encoding="utf-8")


def check(name: str, ok: bool, detail: str = "") -> tuple[bool, str]:
    mark = "OK" if ok else "FAIL"
    suffix = f" — {detail}" if detail else ""
    return ok, f"[{mark}] {name}{suffix}"


def main() -> int:
    parser = argparse.ArgumentParser(description="ArtMusic smoke checks")
    parser.add_argument("--url", help="URL live (ex.: Live Server)", default=None)
    args = parser.parse_args()

    try:
        html = load_html(args.url)
    except (urllib.error.URLError, TimeoutError, OSError) as exc:
        print(f"[FAIL] Não foi possível carregar HTML: {exc}")
        return 1

    results: list[tuple[bool, str]] = []

    results.append(check("title ArtMusic", "ArtMusic" in html and "<title>" in html))
    results.append(check("meta description", 'name="description"' in html))
    results.append(check("Open Graph", 'property="og:title"' in html))
    results.append(check("Twitter card", 'name="twitter:card"' in html))
    results.append(check("canonical", 'rel="canonical"' in html))
    results.append(check("JSON-LD", "application/ld+json" in html))
    results.append(check("theme-color", 'name="theme-color"' in html))
    results.append(check("skip-link", 'class="skip-link"' in html and 'href="#conteudo"' in html))
    results.append(check("main#conteudo", 'id="conteudo"' in html))
    results.append(check("hero sem stats internos", "hero-stats" not in html))
    results.append(check("site-stats abaixo da dobra", 'class="site-stats"' in html))

    colecoes = [
        "colecao-cordas",
        "colecao-sopro",
        "colecao-percussao",
        "colecao-teclados",
        "colecao-dj",
        "colecao-audio",
    ]
    missing = [c for c in colecoes if f'id="{c}"' not in html]
    results.append(check("âncoras de coleção", not missing, ", ".join(missing) if missing else "6/6"))

    webp = len(re.findall(r'type="image/webp"', html))
    results.append(check("sources WebP", webp >= 18, f"{webp} sources"))

    results.append(check("Netlify form surpresa", 'name="surpresa"' in html and "data-netlify" in html))
    results.append(check("Netlify form cadastro", 'name="cadastro"' in html))
    results.append(check("sem href=# mortos", 'href="#"' not in html))
    results.append(check("páginas legais linkadas", "pages/termos.html" in html and "pages/privacidade.html" in html))
    results.append(check("redes sociais ocultas (S2-05)", "footer-social" not in html or "<!-- S2-05" in html))

    hero_webp = (ROOT / "assets/images/hero/hero-studio.webp").exists()
    results.append(check("arquivo hero-studio.webp existe", hero_webp))

    archive_ok = (ROOT / "assets/images/_archive").is_dir()
    results.append(check("_archive presente no repo", archive_ok))

    failed = 0
    for ok, line in results:
        print(line)
        if not ok:
            failed += 1

    print()
    print(f"Resultado: {len(results) - failed}/{len(results)} checks OK")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
