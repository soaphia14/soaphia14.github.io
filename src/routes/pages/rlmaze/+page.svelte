<script>
    import Tag from "../../components/Tag.svelte";
    import { grayedtext } from "../../const";

    const videos = [
        { src: "/rl-maze/specific-maze.mp4", caption: "With a set 7x7 maze" },
        { src: "/rl-maze/random-maze.mp4", caption: "With random 5x5 mazes (some flickering)" },
        { src: "/rl-maze/random-maze-stuck.mp4", caption: "With a random 5x5 maze and getting stuck (some flickering)" },
    ];
</script>

<svelte:head>
    <title>RL Maze · Sophia Liu</title>
    <meta name="description" content="Training a reinforcement learning agent to solve random mazes." />
</svelte:head>

<img
    src="/rl-maze/rl-maze-banner.png"
    alt="RL maze banner"
    class="mb-8 h-48 w-full rounded-2xl border border-white/10 object-cover"
    style="view-transition-name: banner-rlmaze"
/>

<h1>RL Maze</h1>
<div class="flex gap-2"><Tag>Summer 2025</Tag></div>

<h2>Overview</h2>
<p>The goal was to train a reinforcement learning agent to solve any random maze.</p>

<h3>Basic Structure</h3>
<p>
    Maze generation was done through
    <a
        href="https://weblog.jamisbuck.org/2011/1/10/maze-generation-prim-s-algorithm"
        target="_blank"
        class="link">Prim's algorithm</a
    >. All the vertices would have a random weight. Starting from some vertex, its
    frontiers (adjcaent vertices) were added to a heap. The most weighted vertex
    would be taken, and the initial vertex would be connected to the newly chosen
    vertex. Then the chosen vertex's frontiers were added to the heap. The process
    would repeat until no frontiers remained.
</p>
<p>
    The reinforcement learning was done with stable baselines. Each step, the agent would
    recieve the environment's state (defined by an observation space). Based on the state,
    the agent would choose an action from the action space (ie. going forward, backward,
    left, right). Based on the agent's action, the agent would recieve a numerical reward,
    where a higher reward meant a better action. Then the process would then repeat,
    where the agent recieves the environment state changed (in this case) by its action,
    and would then try to predict the best action. The agent would train and improve
    based on learning the relationship between the state, its actions, and the reward.
</p>
<p>The graphics were done with matplotlib!</p>

<h3>~ Gallery ~</h3>
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

<h2>Challenges</h2>
<p>There were a few challenges, from the environment to actual training.</p>

<h3>(1) Deciding the environment state</h3>
<p>
    I first started by inputting the adjacency matrix directly as the state. This was
    far too abstract, as the agent would have to decipher from the 0s and 1s which vertices
    were connected to which.
</p>
<p>
    I then tried having the 2D array be a 1-1 replica of the maze. Different numbers
    represented different states of a vertex, ie. 0 = an empty space, 1 = a wall (impassable),
    2 = already visited, 3 = where the agent was. This didn't work much better. The agent
    would often just jump between the same two vertices without making progress.
</p>
<p>
    The last one that moreso worked had this "channels" idea. Instead of a square array
    that mimicked the maze, each index of the array would contain information for that
    vertex. This information would be an array with 6 entries:
</p>
<ul>
    <li>
        Indices 0-3 = 0 (false) or 1 (true) if the vertex had a wall above, to
        the right, below, or to the left of it
    </li>
    <li>Index 4 = if the vertex was already visited</li>
    <li>Index 5 = if the agent is at this vertex</li>
</ul>
<p>
    This worked the best. It had the simplest and clearest information, as it had a repetitive
    format with only 0s and 1s.
</p>

<h3>(2) Reward Calculation</h3>
<p>
    The initial idea was to negatively reward going into walls as well as any step that
    wasn't into the goal. This was supposed to force the model to find the shortest path
    to the goal, yet it turned out to be overly punitive. It would only work if the agent
    somehow found the end of the maze randomly, and this became increasingly unlikely
    as the mazes got larger. The agent would just start jumping between two vertices
    to minimize the negative reward.
</p>
<p>The end version, though not perfect, rewarded steps into unvisited vertices. Specifically:</p>
<ul>
    <li>-0.15 for hitting a wall</li>
    <li>-0.02 for visiting an already visited vertex</li>
    <li>+0.01 for visiting an unvisited vertex</li>
    <li>+10 for reaching the end</li>
</ul>

<h3>(3) Training</h3>
<p>
    Training on one maze for a some thousand steps meant it memorized the path to achieve
    the highest award (like overfitting!). It's not intelligent, but it was able to solve
    only that specific maze.
</p>
<p>
    To try to get an agent that could solve a maze it hadn't seen before, I first tried
    providing a different random maze for each step. That was too random for the agent.
    It was extremely unlikely it would reach the end and get the the large positive reward
    on its first try, so the agent never learned to go to the end.
</p>
<p>
    To try to teach the agent that the end vertex is the goal, I started training the
    agent for a few thousand steps on one maze, instead of switching the maze each step.
    This was tricky, since training one maze too many steps would overfit the agent so
    it only knew that maze. Training too few steps meant the agent never figured out
    how to reach the end either.
</p>

<h2>Conclusion / Takeaways</h2>
<p>
    I got it working on random 5x5 mazes decently! The agent had a harder time solving
    any random larger maze, likely since it was harder to randomly reach the end of the
    maze.
</p>
<p>
    I had two main takeaways: (1) the environment state should be as simple as possible
    and give as much information as possible. (2) the reward function should also be
    simple. It honestly surprised me by how finicky RL could be, and how careful the
    training had to be to create a usuable result. It makes me curious to the immense
    amount of work to find the optimal reward functions and to create the most robust
    models possible.
</p>
<p class="{grayedtext} mt-6">
    Note: Reading about basic RL mechanics also greatly helped me understand how
    I should code this project!
</p>
