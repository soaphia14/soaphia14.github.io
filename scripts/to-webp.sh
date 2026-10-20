#!/usr/bin/env bash
# Converts images in static/ to .webp (needs `brew install webp`).
#   ./scripts/to-webp.sh <file>...   convert specific files
#   ./scripts/to-webp.sh             convert every png/jpg/gif in static/
# Photos are capped at 1600px on the long side; charts/screenshots stay lossless-ish.
# Originals are deleted after a successful conversion (they're still in git history).
set -euo pipefail
cd "$(dirname "$0")/.."

MAX=1600

convert() {
	local src="$1" out="${1%.*}.webp"
	src=$(upright "$src")
	case "$src" in
	*.gif | *.GIF)
		gif2webp -quiet -lossy -q 70 -m 6 "$src" -o "$out"
		;;
	*/skaterdata/* | *rl-maze* | */banners/* | *arrow*)
		# lines and text: keep them crisp
		cwebp -quiet -q 92 -m 6 -alpha_q 100 $(resize_args "$src") "$src" -o "$out"
		;;
	*)
		cwebp -quiet -q 80 -m 6 $(resize_args "$src") "$src" -o "$out"
		;;
	esac
	echo "$(du -h "$1" | cut -f1) -> $(du -h "$out" | cut -f1)  $out"
	rm -f "$1" "${TMPDIR:-/tmp}/upright-$$.jpg"
}

# Phone photos often store pixels sideways plus an EXIF "rotate me" tag that cwebp ignores.
# Prints the path to an upright copy (or the original if no rotation is needed).
upright() {
	local deg
	deg=$(python3 -c '
import sys
d = open(sys.argv[1], "rb").read(65536)
i, j = d.find(b"\x01\x12\x00\x03"), d.find(b"\x12\x01\x03\x00")
o = d[i+8]*256 + d[i+9] if i >= 0 else (d[j+8] + d[j+9]*256 if j >= 0 else 1)
print({3: 180, 6: 90, 8: 270}.get(o, 0))
' "$1")
	if ((deg)); then
		sips -r "$deg" "$1" --out "${TMPDIR:-/tmp}/upright-$$.jpg" >/dev/null
		echo "${TMPDIR:-/tmp}/upright-$$.jpg"
	else
		echo "$1"
	fi
}

# Prints "-resize W 0" or "-resize 0 H" when the long side is over $MAX.
resize_args() {
	local w h
	w=$(sips -g pixelWidth "$1" | awk '/pixelWidth/ {print $2}')
	h=$(sips -g pixelHeight "$1" | awk '/pixelHeight/ {print $2}')
	if ((w >= h && w > MAX)); then
		echo "-resize $MAX 0"
	elif ((h > w && h > MAX)); then
		echo "-resize 0 $MAX"
	fi
}

if (($#)); then
	files=("$@")
else
	files=()
	while IFS= read -r f; do files+=("$f"); done < <(find static -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.gif' \))
fi

for f in "${files[@]}"; do convert "$f"; done
