#!/usr/bin/env bash
set -euo pipefail

url=${1:?"Usage: run-lighthouse.sh URL [OUTPUT_DIR]"}
output_dir=${2:-lighthouse-results}
mkdir -p "$output_dir"

common=(
  "$url"
  --quiet
  --chrome-flags="--headless=new --no-sandbox --disable-gpu"
  --only-categories=performance,accessibility,best-practices,seo
  --output=json
)

npx --yes lighthouse "${common[@]}" --output-path="$output_dir/mobile.json"
npx --yes lighthouse "${common[@]}" --preset=desktop --output-path="$output_dir/desktop.json"

node - "$output_dir" <<'NODE'
const fs = require('node:fs');
const path = require('node:path');
const outputDir = process.argv[2];
const profiles = ['mobile', 'desktop'];
const rows = profiles.map(profile => {
  const report = JSON.parse(fs.readFileSync(path.join(outputDir, `${profile}.json`), 'utf8'));
  const score = name => Math.round(report.categories[name].score * 100);
  const value = name => report.audits[name].displayValue || 'n/a';
  return `| ${profile} | ${score('performance')} | ${score('accessibility')} | ${score('best-practices')} | ${score('seo')} | ${value('first-contentful-paint')} | ${value('largest-contentful-paint')} | ${value('total-blocking-time')} | ${value('cumulative-layout-shift')} |`;
});

const summary = [
  '# Lighthouse results',
  '',
  '| Profile | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS |',
  '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
  ...rows,
  ''
].join('\n');

fs.writeFileSync(path.join(outputDir, 'summary.md'), summary);
process.stdout.write(summary);
NODE
