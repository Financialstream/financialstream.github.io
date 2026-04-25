#!/usr/bin/env bash
set -euo pipefail

echo "Running Financial Stream Stage 1 audit..."

OLD_BRAND_MATCHES=$(grep -Rni "ProAI\|proaiexpert\|AI Systems Architecture" . \
  --include="*.html" \
  --include="*.css" \
  --include="*.js" \
  --include="*.xml" \
  --include="*.json" \
  --include="*.md" \
  --include="*.txt" \
  --exclude="audit-before-*" \
  --exclude="audit-after-*" \
  --exclude-dir=".git" \
  --exclude-dir="node_modules" || true)

OLD_DOMAIN_MATCHES=$(grep -Rni "proaiexpert.github.io" . \
  --include="*.html" \
  --include="*.css" \
  --include="*.js" \
  --include="*.xml" \
  --include="*.json" \
  --include="*.md" \
  --include="*.txt" \
  --exclude="audit-before-*" \
  --exclude="audit-after-*" \
  --exclude-dir=".git" \
  --exclude-dir="node_modules" || true)

OLD_ANCHOR_MATCHES=$(grep -Rni "#categories\|#what-we-build\|#how-it-works" . \
  --include="*.html" \
  --include="*.js" \
  --include="*.md" \
  --exclude="audit-before-*" \
  --exclude="audit-after-*" \
  --exclude-dir=".git" \
  --exclude-dir="node_modules" || true)

MOJIBAKE_MATCHES=$(grep -Rni "Ð\|Ñ\|Ã\|�" . \
  --include="*.html" \
  --include="*.js" \
  --include="*.css" \
  --include="*.md" \
  --include="*.txt" \
  --exclude-dir=".git" \
  --exclude-dir="node_modules" || true)

SITEMAP_LEGACY_MATCHES=$(grep -n "proaiexpert\|github.io\|cases\|patterns\|client-intake-automation" sitemap.xml || true)
ROBOTS_OLD_DOMAIN_MATCHES=$(grep -n "proaiexpert\|github.io" robots.txt || true)

if [ -n "$OLD_BRAND_MATCHES" ]; then
  echo "ERROR: old brand matches found:"
  echo "$OLD_BRAND_MATCHES"
  exit 1
fi

if [ -n "$OLD_DOMAIN_MATCHES" ]; then
  echo "ERROR: old domain matches found:"
  echo "$OLD_DOMAIN_MATCHES"
  exit 1
fi

if [ -n "$OLD_ANCHOR_MATCHES" ]; then
  echo "ERROR: old anchor matches found:"
  echo "$OLD_ANCHOR_MATCHES"
  exit 1
fi

if [ -n "$MOJIBAKE_MATCHES" ]; then
  echo "ERROR: possible mojibake matches found:"
  echo "$MOJIBAKE_MATCHES"
  exit 1
fi

if [ -n "$SITEMAP_LEGACY_MATCHES" ]; then
  echo "ERROR: sitemap legacy matches found:"
  echo "$SITEMAP_LEGACY_MATCHES"
  exit 1
fi

if [ -n "$ROBOTS_OLD_DOMAIN_MATCHES" ]; then
  echo "ERROR: robots old domain matches found:"
  echo "$ROBOTS_OLD_DOMAIN_MATCHES"
  exit 1
fi

echo "Checking JS syntax..."

NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
elif command -v node.exe >/dev/null 2>&1; then
  NODE_BIN="node.exe"
elif [ -x "/c/Program Files/nodejs/node.exe" ]; then
  NODE_BIN="/c/Program Files/nodejs/node.exe"
elif [ -x "/c/Program Files (x86)/nodejs/node.exe" ]; then
  NODE_BIN="/c/Program Files (x86)/nodejs/node.exe"
else
  echo "ERROR: node runtime not found in PATH."
  exit 1
fi

check_js_file() {
  local f="$1"
  if [ -f "$f" ]; then
    "$NODE_BIN" --check "$f"
  fi
}

check_js_file "script.js"
check_js_file "shared-header.js"
check_js_file "shared-service-components.js"
check_js_file "shared-article-components.js"
check_js_file "assets/js/shared-header.js"
check_js_file "assets/js/shared-service-components.js"
check_js_file "assets/js/shared-article-components.js"
check_js_file "assets/js/main.js"

echo "Stage 1 audit passed."
