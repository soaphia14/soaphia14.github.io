import"../chunks/DsnmJJEf.js";import"../chunks/CRwduzR4.js";import{f as l,s as a,a as d,t as c,b as i,d as m,$ as g,a0 as w,r as f}from"../chunks/e5_oPY-9.js";import{s as p,c as u,g as v}from"../chunks/C7_UZ8Ln.js";import{T as b}from"../chunks/DOmxGK3C.js";var y=l(`<h1>RL Maze</h1> <span class="flex"><!></span> <br/> <h2>Overview</h2> The goal was to train a reinforcement learning agent to solve any random maze. <br/><br/> <h3>Basic Structure</h3> Maze generation was done through <a href="https://weblog.jamisbuck.org/2011/1/10/maze-generation-prim-s-algorithm" target="_blank" class="underline">Prim's algorithm</a>. All the vertices would have a random weight. Starting from some vertex, its
frontiers (adjcaent vertices) were added to a heap. The most weighted vertex
would be taken, and the initial vertex would be connected to the newly chosen
vertex. Then the chosen vertex's frontiers were added to the heap. The process
would repeat until no frontiers remained. <br/><br/> The reinforcement learning was done with stable baselines. Each step, the agent would
recieve the environment's state (defined by an observation space). Based on the state,
the agent would choose an action from the action space (ie. going forward, backward,
left, right). Based on the agent's action, the agent would recieve a numerical reward,
where a higher reward meant a better action. Then the process would then repeat,
where the agent recieves the environment state changed (in this case) by its action,
and would then try to predict the best action. The agent would train and improve
based on learning the relationship between the state, its actions, and the reward. <br/><br/> The graphics were done with matplotlib! <br/><br/> <h3>~ Gallery ~</h3> <div class="flex flex-wrap"><div class="mx-auto mt-3 flex flex-col text-center items-center">With a set 7x7 maze: <video class="max-w-xs" autoplay loop><source src="/rl-maze/specific-maze.mp4" type="video/mp4"/> <track kind="captions"/></video></div> <div class="mx-auto mt-3 flex flex-col text-center items-center">With random 5x5 mazes (some flickering): <video class="max-w-xs" autoplay loop><source src="/rl-maze/random-maze.mp4" type="video/mp4"/> <track kind="captions"/></video></div> <div class="mx-auto mt-3 flex flex-col text-center items-center">With a random 5x5 maze and getting stuck (some flickering): <video class="max-w-xs" autoplay loop><source src="/rl-maze/random-maze-stuck.mp4" type="video/mp4"/> <track kind="captions"/></video></div></div> <br/> <h2>Challenges</h2> There were a few challenges, from the environment to actual training. <br/><br/> <h3>(1) Deciding the environment state</h3> I first started by inputting the adjacency matrix directly as the state. This was
far too abstract, as the agent would have to decipher from the 0s and 1s which vertices
were connected to which. <br/><br/> I then tried having the 2D array be a 1-1 replica of the maze. Different numbers
represented different states of a vertex, ie. 0 = an empty space, 1 = a wall (impassable),
2 = already visited, 3 = where the agent was. This didn't work much better. The agent
would often just jump between the same two vertices without making progress. <br/><br/> The last one that moreso worked had this "channels" idea. Instead of a square array
that mimicked the maze, each index of the array would contain information for that
vertex. This information would be an array with 6 entries: <br/> <ul><li class="list-disc ml-5">Indices 0-3 = 0 (false) or 1 (true) if the vertex had a wall above, to
        the right, below, or to the left of it</li> <li class="list-disc ml-5">Index 4 = if the vertex was already visited</li> <li class="list-disc ml-5">Index 5 = if the agent is at this vertex</li></ul> This worked the best. It had the simplest and clearest information, as it had a repetitive
format with only 0s and 1s. <br/><br/> <h3>(2) Reward Calculation</h3> The initial idea was to negatively reward going into walls as well as any step that
wasn't into the goal. This was supposed to force the model to find the shortest path
to the goal, yet it turned out to be overly punitive. It would only work if the agent
somehow found the end of the maze randomly, and this became increasingly unlikely
as the mazes got larger. The agent would just start jumping between two vertices
to minimize the negative reward. <br/><br/> The end version, though not perfect, rewarded steps into unvisited vertices. Specifically: <ul><li class="list-disc ml-5">-0.15 for hitting a wall</li> <li class="list-disc ml-5">-0.02 for visiting an already visited vertex</li> <li class="list-disc ml-5">+0.01 for visiting an unvisited vertex</li> <li class="list-disc ml-5">+10 for reaching the end</li></ul> <br/> <h3>(3) Training</h3> Training on one maze for a some thousand steps meant it memorized the path to achieve
the highest award (like overfitting!). It's not intelligent, but it was able to solve
only that specific maze. <br/><br/> To try to get an agent that could solve a maze it hadn't seen before, I first tried
providing a different random maze for each step. That was too random for the agent.
It was extremely unlikely it would reach the end and get the the large positive reward
on its first try, so the agent never learned to go to the end. <br/><br/> To try to teach the agent that the end vertex is the goal, I started training the
agent for a few thousand steps on one maze, instead of switching the maze each step.
This was tricky, since training one maze too many steps would overfit the agent so
it only knew that maze. Training too few steps meant the agent never figured out
how to reach the end either. <br/><br/> <h2>Conclusion / Takeaways</h2> I got it working on random 5x5 mazes decently! The agent had a harder time solving
any random larger maze, likely since it was harder to randomly reach the end of the
maze. <br/><br/> I had two main takeaways: (1) the environment state should be as simple as possible
and give as much information as possible. (2) the reward function should also be
simple. It honestly surprised me by how finicky RL could be, and how careful the
training had to be to create a usuable result. It makes me curious to the immense
amount of work to find the optimal reward functions and to create the most robust
models possible. <br/><br/> <p>Note: Reading about basic RL mechanics also greatly helped me understand how
    I should code this project!</p>`,3);function _(r){var t=y(),e=a(d(t),2),s=m(e);b(s,{children:(n,x)=>{g();var h=w("Summer 2025");i(n,h)},$$slots:{default:!0}}),f(e);var o=a(e,76);c(()=>p(o,1,u(v))),i(r,t)}export{_ as component};
