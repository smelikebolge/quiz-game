# Vibe Coding Experience with Google Antigravity

## Tool Selection Justification

I chose **Google Antigravity** as my vibe coding tool because it is designed as an agent-based IDE rather than a simple autocomplete plugin. It provides an Agent Manager, implementation plans, and automatic file generation. This makes it a good example of the “vibe coding” paradigm, where the AI behaves like a collaborator inside the editor instead of just finishing my lines of code.

Another reason for choosing Antigravity was that it is directly integrated into a VS Code–style editor. I could open a folder, talk to the agent, and watch it create and edit files in real time. For this homework, that gave me a clear story to tell about how AI affects the development process.

## Development Process

I started by creating an empty folder called `quiz-game` and opening it in Antigravity. Then I used natural language to describe my goal: a simple quiz game built with HTML, CSS, and JavaScript, no frameworks, and able to run just by opening `index.html`. Antigravity responded by planning the structure and creating three main files: `index.html`, `style.css`, and `app.js`.

The agent wrote the initial quiz logic and UI. It generated a modern card-style interface with a progress bar and a set of five multiple-choice questions. My main job was to review what it created. When I wanted adjustments, I asked for them using prompts such as “simplify the quiz logic”, “fix the error about startGame not being defined”, or “keep everything in vanilla JS with no build tools”.

Throughout the process, I let Antigravity handle the code generation while I focused on testing the quiz in the browser, verifying that the score updated correctly and that the next button worked as expected.

## Challenges and Solutions

One challenge occurred when the page stopped working and the console showed the error `startGame is not defined`. This was caused by a mismatch between the function name in the HTML and the function in `app.js`. With Antigravity, I did not have to manually search everywhere; instead, I asked the agent to fix the mismatch so that the Start button would call the correct function. It updated the files and removed the error.

Another challenge was managing complexity. Sometimes the agent tried to create more advanced UI styles or extra features that I did not need for the homework. To solve this, I explicitly asked it to keep the UI simple and focus on the core quiz features. This reminded me that prompts must be specific; otherwise the AI may over-engineer the solution.

A final challenge was documentation. Besides code, the assignment required README, ANALYSIS, and EXPERIENCE files. I used a combination of my own writing and AI assistance to structure these documents, but I made sure to read and edit them so they accurately reflected what I did.

## Reflection

This assignment changed how I think about programming. Instead of typing every line myself, I interacted with an AI that understands my goals and can generate large chunks of the project. My work shifted from manual coding to describing, reviewing, and correcting. This is exactly what “vibe coding” means to me.

I would use Antigravity again for small apps, prototypes, and learning projects, because it saves time on setup and boilerplate. However, I also see the importance of understanding the code that the AI writes. Without basic HTML, CSS, and JavaScript knowledge, it would be hard to debug or evaluate the results.

Overall, I believe that vibe coding tools will not replace developers, but they will change their role. Developers will spend less time writing repetitive code and more time defining requirements, architecture, testing strategies, and quality standards. This homework was my first real experience with that kind of workflow.

