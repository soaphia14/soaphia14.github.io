---
title: RL Maze Agent
years: [2025]
date: Summer 2025
status: done
summary: Trained an RL agent to solve up to a 5x5 maze.
banner: /banners/rl-maze.webp
bannerFit: contain   # show the whole maze (start and goal corners)
bannerVideo: /rl-maze/random-maze.mp4
links:
  - { type: github, url: "https://github.com/soaphia14/rl-maze" }
---

<script>
    const videos = [
        { src: "/rl-maze/specific-maze.mp4", caption: "With a set 7x7 maze" },
        { src: "/rl-maze/random-maze.mp4", caption: "With random 5x5 mazes" },
        { src: "/rl-maze/random-maze-stuck.mp4", caption: "With a random 5x5 maze and getting stuck" },
    ];
</script>

## Overview

The goal was to train a reinforcement learning agent to solve any random maze.

### Basic Structure

Maze generation was done through [Prim's algorithm](https://weblog.jamisbuck.org/2011/1/10/maze-generation-prim-s-algorithm). All the vertices would have a random weight. Starting from some vertex, its frontiers (adjacent vertices) were added to a heap. The most weighted vertex would be taken, and the initial vertex would be connected to the newly chosen vertex. Then the chosen vertex's frontiers were added to the heap. The process would repeat until no frontiers remained.

The reinforcement learning was done with stable baselines. Each step, the agent would receive the environment's state (defined by an observation space). Based on the state, the agent would choose an action from the action space (ie. going forward, backward, left, right). Based on the agent's action, the agent would receive a numerical reward, where a higher reward meant a better action. Then the process would repeat, where the agent receives the environment state changed (in this case) by its action, and would then try to predict the best action. The agent would train and improve based on learning the relationship between the state, its actions, and the reward.

The graphics were done with matplotlib!

### ~ Gallery ~

<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
{#each videos as video}
<figure class="card overflow-hidden">
<video class="w-full" autoplay loop muted playsinline>
<source src={video.src} type="video/mp4" />
<track kind="captions" />
</video>
<figcaption class="p-3 text-sm text-notwhite/80">{video.caption}</figcaption>
</figure>
{/each}
</div>

## Challenges

There were a few challenges, from the environment to actual training.

### (1) Deciding the environment state

I first started by inputting the adjacency matrix directly as the state. This was far too abstract, as the agent would have to decipher from the 0s and 1s which vertices were connected to which.

I then tried having the 2D array be a 1-1 replica of the maze. Different numbers represented different states of a vertex, ie. 0 = an empty space, 1 = a wall (impassable), 2 = already visited, 3 = where the agent was. This didn't work much better. The agent would often just jump between the same two vertices without making progress.

The last one that moreso worked had this "channels" idea. Instead of a square array that mimicked the maze, each index of the array would contain information for that vertex. This information would be an array with 6 entries:

- Indices 0-3 = 0 (false) or 1 (true) if the vertex had a wall above, to the right, below, or to the left of it
- Index 4 = if the vertex was already visited
- Index 5 = if the agent is at this vertex

This worked the best. It had the simplest and clearest information, as it had a repetitive format with only 0s and 1s.

### (2) Reward Calculation

The initial idea was to negatively reward going into walls as well as any step that wasn't into the goal. This was supposed to force the model to find the shortest path to the goal, yet it turned out to be overly punitive. It would only work if the agent somehow found the end of the maze randomly, and this became increasingly unlikely as the mazes got larger. The agent would just start jumping between two vertices to minimize the negative reward.

The end version, though not perfect, rewarded steps into unvisited vertices. Specifically:

- -0.15 for hitting a wall
- -0.02 for visiting an already visited vertex
- +0.01 for visiting an unvisited vertex
- +10 for reaching the end

### (3) Training

Training on one maze for some thousand steps meant it memorized the path to achieve the highest reward (like overfitting!). It's not intelligent, but it was able to solve only that specific maze.

To try to get an agent that could solve a maze it hadn't seen before, I first tried providing a different random maze for each step. That was too random for the agent. It was extremely unlikely it would reach the end and get the large positive reward on its first try, so the agent never learned to go to the end.

To try to teach the agent that the end vertex is the goal, I started training the agent for a few thousand steps on one maze, instead of switching the maze each step. This was tricky, since training one maze too many steps would overfit the agent so it only knew that maze. Training too few steps meant the agent never figured out how to reach the end either.

## Conclusion / Takeaways

I got it working on random 5x5 mazes decently! The agent had a harder time solving any random larger maze, likely since it was harder to randomly reach the end of the maze.

I had two main takeaways: (1) the environment state should be as simple as possible and give as much information as possible. (2) the reward function should also be simple. It honestly surprised me by how finicky RL could be, and how careful the training had to be to create a usable result. It makes me curious to the immense amount of work to find the optimal reward functions and to create the most robust models possible.

<p class="muted mt-6">Note: Reading about basic RL mechanics also greatly helped me understand how I should code this project!</p>
