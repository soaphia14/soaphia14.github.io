
export const divclass = "bg-divfill/60 border-divborder/20 border-1 rounded-lg text-notwhite"
export const grayedtext = "text-white/50"
export const imgclass = "border-2 border-white rounded-lg md:w-4/5 mx-auto";

// Project card interface
export interface ProjectCard {
    title: string,
    date: string,
    tags?: string[],
    description: string,
    banner?: string,
    links?: Link[]
}

export interface Link {
    type: "ext" | "github" | "youtube",
    url: string,
    target: "_blank" | "_self",
    name?: string
}

export const projects: ProjectCard[] = [
    {
        title: "Critter Simulator", date: "2025",
        description:
            "For my CS 2112 class, I programmed simulation logic, GUI, and a thread-safe server/client system to simulate evolving critters.<br><br>So far one of my favorite classes at Cornell!",
        banner: "/banners/critters3.png",
        tags: ["FA25 CS 2112"],
    },
    {
        title: "Color Awareness with WebGazer.js", date: "2025",
        description:
            "A website inspired from my psychology writing class. It attempts to demonstrate the limits of color awareness with webcam eyetracking.",
        banner: "/banners/eyetracking.png",
        links: [
            {
                type: "ext",
                name: "Demo",
                url: "https://soaphia14.github.io/fws-port",
                target: "_self"
            },
            {
                type: "github",
                url: "https://github.com/soaphia14/fws-port/",
                target: "_blank"
            }
        ]

    },
    {
        title: "Skater Data", date: "2025",
        description:
            "Analyzing whether the technical score has increased more than the program components score over past 2 decades.",
        banner: "/skaterdata/ladies_fs.png",
        links: [
            {
                type: "ext",
                name: "Article",
                url: "/pages/skaterdata/#top",
                target: "_self"
            }
        ]
    },
    {
        title: "RL Maze Agent",
        date: "2025",
        description: "Trained an RL agent to solve up to a 5x5 maze.",
        banner: "/rl-maze/rl-maze-banner.png",
        tags: [],
        links: [
            {
                type: "ext",
                name: "Article",
                url: "/pages/rlmaze/#top",
                target: "_self"
            }, {
                type: "github",
                url: "https://github.com/soaphia14/rl-maze",
                target: "_blank"
            }
        ]
    },
    {
        title: "Mock Interview Website",
        date: "2023-2024",
        description:
            "An interview practice platform providing personalized AI-generated questions and video feedback.",
        banner: "/banners/pokeco_ex_logo.png",
        links: [
            {
                type: "ext",
                name: "Website",
                url: "https://poke-and-goose.onrender.com/",
                target: "_blank"
            },
            {
                type: "github",
                url: "https://github.com/soaphia14/teampoke",
                target: "_blank"
            }
        ]
    },
    {
        title: "PigeonBots Website", date: "2023",
        description: "Team website for the FTC team #23975.",
        tags: ["Website"],
        banner: "/banners/pigeonbots.png",
        links: [
            {
                type: "ext",
                name: "Website",
                url: "https://pigeon-bots.netlify.app",
                target: "_blank"
            }
        ]
    },
    {
        title: "SGA Election Website",
        date: "2023",
        description:
            "A secure election platform that was used for my high school's freshman SGA elcetions.",
        tags: ["Website"],
        banner: "/banners/phssite2.png",
        links: [
            {
                type: "ext",
                name: "Demo Vid",
                url: "https://drive.google.com/file/d/14IRsYTx6a1rcwNrec9evfGOD01tgT4GW/view?usp=sharing",
                target: "_blank"
            },
            {
                type: "github",
                url: "https://github.com/soaphia14/phs-sga-site",
                target: "_blank"
            }
        ]
    },
];


interface FutureProjectCard {
    title: string,
    description: string
}


export const futureProjects: FutureProjectCard[] = [
    {
        title: "Bad 2048",
        description: "2048 but 2048x more annoying"
    },
    {
        title: "Monte Carlinux",
        description: "There's a 60% of finding a linux user in your engineering class. But how many classes are needed to find someone who passes all your checks?",
    },
    {
        title: "DuoLeetCode",
        description:
            "The best way to practice LeetCode problems with a friend. Adds fun to a typically grueling task.",
    },
    {
        title: "Chess Bot",
        description: "It sounds cool to learn how to make one :v"
    },
    {
        title: "Which Liberal Studies Can I actually take??",
        description: "For Cornell Engineering people, to find open liberal studies under specific groups."
    }
]
