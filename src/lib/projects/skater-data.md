---
title: Skater Data
years: [2025]
date: Sept/Oct 2025
status: done
summary: Analyzing whether the technical score has increased more than the program components score over past 2 decades.
banner: /skaterdata/ladies_fs.webp
bannerFit: contain   # show the whole chart
tags: [Fun]
---

<script>
    const figure = "my-6 grid items-center gap-4 lg:grid-cols-2";
    const img = "rounded-xl border border-white/10 w-full";
</script>

## Overview

As a casual skating fan, sometimes I hear debates about whether artistry is dying - that artistry is being sacrificed for a higher technical difficulty. This is a project examining the scores (tech, pc, overall) and seeing if there are any noticeable trends over time according to the data.

<dl class="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
<dt class="text-soappink">tech</dt><dd>technical score</dd>
<dt class="text-soappink">pc</dt><dd>program components score</dd>
</dl>

## Data Collection

ISU is simultaneously very consistent and extremely inconsistent in their link name for the worlds results.

For example, the ending links for 2010 and 2013 results:

<div class="card mt-3 p-4 font-mono text-sm">
<a href="https://www.isuresults.com/results/wc2010/wc10_Men_SP_Scores.pdf" target="_blank">.../wc2010/<span class="rounded bg-soappink/20 px-1">wc10</span>_Men_SP_Scores.pdf</a><br>
<a href="https://www.isuresults.com/results/wc2013/wc2013_Men_SP_Scores.pdf" target="_blank">.../wc2013/<span class="rounded bg-soappink/20 px-1">wc2013</span>_Men_SP_Scores.pdf</a>
</div>

These two links go to their respective different results pages. And the only difference is that one omits the "20" and the other one doesn't.

Regardless, the variations were small enough that I could write a script to access most of the pdfs. My first thought was to scrape data directly from the website, but I soon figured it would be easier to directly download them instead of having to parse through HTML.

From there, I attempted to parse through the pdfs, which had an even more inconsistent format. I did extract some of the scores via automated parsing, though in the end I manually inputted a majority of the scores into a python dictionary. Just for funsies, I used a SQL dictionary to then store all the data (since I wanted to learn how SQL worked).

I took the scores from the top skater in both the short and long program for both the men and ladies event. Both the technical score and program component, as well as total score, were recorded. Deductions weren't factored to keep the data simpler.

So, onto some graphs!

## Results - Ladies

<p class="muted">&lt; insert matplotlib graphs here &gt;<br>wait i mean..</p>

<div class={figure}>
<img src="/skaterdata/ladies_sp.webp" alt="Ladies SP Scores Over Time" class={img} loading="lazy" />
<p>The gap between tech and pc has largely stayed constant since IJS started. This makes sense since women are limited to triples in the short program.</p>
</div>

<div class={figure}>
<img src="/skaterdata/ladies_fs.webp" alt="Ladies FS Scores Over Time" class={img} loading="lazy" />
<p>The FS scores are interesting. The tech and pc scores seemed to have stayed relatively even to each other. Though there was a spike in tech score around 2019-2022 (likely due to russian women competing quads), that trend hasn't continued since 2022.</p>
</div>

## Results - Men

<div class={figure}>
<img src="/skaterdata/men_sp.webp" alt="Men SP Scores Over Time" class={img} loading="lazy" />
<p>There's been a clear increase in technical scores, especially starting around 2017. This is likely thanks to a rise in quantity and quality of quad jumps being performed.</p>
</div>

<div class={figure}>
<img src="/skaterdata/men_fs.webp" alt="Men FS Scores Over Time" class={img} loading="lazy" />
<p>A similar story can be said about the free skate scores. Since 2017, there's been a clear gap between the technical and program component scores. The pc scores (green line) has largely stayed constant, while the large spikes in overall scores have been driven by technical score increases.</p>
</div>

## Conclusions

One thing to note is that there's been many (many) changes to scoring and rules over time, so I'm likely oversimplifying by just looking at scores over time.

But from raw score data, for ladies there doesn't necessarily seem to be a huge increase in favoring the tech over pc. Though as a viewer there's been an undeniable increase in technical difficulty (more quads, more difficult jump combinations), from the data, the pc scores have changed at a similar rate.

For mens, there's a noticeable increase in gap between tech and pc scores, especially since 2017. This is likely due to the rise of quads (ie. Nathan Chen and Ilia Malinin setting records on the number of quads in one program). Still, pc scores have stayed relatively constant, showing that the artistic side is still being paid attention to.

Overall, there's been a general rise in difficulty in figure skating. However, the "artistic side" of skating, represented by the pc score, hasn't necessarily been sacrificed to make way for difficulty.

<p class="muted mt-6">And since I mentioned the 2017 worlds men's sp/fs a few times, I'm obligated to say that Yuzuru Hanyu's 2017 worlds free skate will forever be ICONIC.</p>
