# A* Pathfinding Challenge

I gave myself 4 hours to complete this challenge. The objective was to create a
pathfinding algorithm that can find the shortest path between two points in a
grid.

## Technologies

- React
- ESLint
- TypeScript
- StyledComponents

## Thought Process

To be honest, I would not use React for this kind of challenge. I would just
use a plain old HTML/CSS/JS with a Snowpack setup for the development
environment and to build the static files for the production environment.

My first thought was to use the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
to find the shortest path. I've never coded it before, but I've used it and
read about it's implementation. I considered using one of the available npm
packages for this, but I decided to write my own.

Before working on the components, and knowing about the time limit, I decided
to start by algorithm implementation. I used the Wikipedia article as my main
reference, but I also used two videos I've watched before: [Computerphile - A* (A Star) Search Algorithm](https://www.youtube.com/watch?v=ySN5Wnu88nE)
and [Daniel Shiffman - Coding Challenge 51.1: A* Pathfinding Algorithm](https://www.youtube.com/watch?v=aKYlikFAV4k).
This implementation took most of the time I had to complete the challenge.

Once it was working, I started building the basic components. The main
component is the App component, which holds the maze reference, the solution,
and the solver. Once I was able to render a basic maze using numbers to
represent the maze state (walls, open spaces, solution, and the start and end
points), I started working on the UI elements: Maze, and Tile.

Finally, as I had some minutes left before writting this README, I decided to
add a basic interaction with the maze. Every tile has a click event, which will
toggle the tile's state between open and wall. This also triggers the solver to
find the shortest path again.


## Running the repo

Just do the old `npm install` and `npm start`.