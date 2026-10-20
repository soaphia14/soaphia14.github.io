---
# HOW TO ADD A PROJECT
# 1. Copy this file and rename it, e.g. my-cool-thing.md (the name becomes the URL: /projects/my-cool-thing)
# 2. Fill in the fields below. Only title, status and summary are required.
# 3. Put a banner image at static/banners/my-cool-thing.webp
#    (convert with ./scripts/to-webp.sh path/to/image.png)
# 4. Anything you write below the closing --- becomes an article page,
#    and the card gets an "Article" link automatically. Leave it empty for no article.
# Files starting with _ (like this one) are ignored.

title: My Cool Thing
status: done                 # done = Projects grid, wip = "In the Works"
years: [2026]                # used for the year filter; [2025, 2026] for multi-year
date: Spring 2026            # optional label shown instead of the years
pinned: false                # true = shown in "Pinned" at the top of Projects
summary: One or two sentences for the card. <br> works for line breaks.
banner: /banners/my-cool-thing.webp
bannerPosition: 50% 50%      # optional: focus point when the banner is cropped (x% y%, 0% 0% = top left)
bannerFit: cover              # optional: contain = show the whole banner on the card instead of cropping
bannerBg: "#ffffff"           # optional: background behind a contained banner (default white)
bannerVideo: /my-cool-thing/demo.mp4   # optional: looping video instead of the image (image becomes its poster)
tags: [Website, CS 1234]      # or a colored/linked pill: { name: CUAir, color: red, url: "https://cuair.org/" }  (red, orange, amber, green, blue, purple, pink)
links:
  - { type: github, url: "https://github.com/soaphia14/my-cool-thing" }
  - { type: ext, name: Demo, url: "https://example.com" }
  - { type: youtube, url: "https://youtu.be/..." }
---

## Overview

Write the article in Markdown. HTML and Svelte work here too.
