# Memory Card App

## Result
![Preview of the memory game](./src/notes%20and%20resources/preview.png)

## About this project
The main goal of this project is to implement the concepts learned so far by using hooks to manage and utilize state while fetching and using data from an external API. I have also added Tailwind in this project to get some more practice with it. 

## Game Instructions
- You can click each card only once
- Each time you pick a card, a new set renders
- If you've clicked a card twice, the game ends and you get the option to start a new game

## Project Objectives
- get images from an API
- keep track of score
- keep track of highscore
- randomize images after each turn
- deploy

## Notes and Lessons Learned
- With a bit more planning, some of these components could be way more reusable which would definitely be nice when it comes to replacing the API with an entirely different one.
- I was debugging a re-render which was only there because of React Strictmode running the useEffect twice, which is expected behavior during development for debugging

## How to install and run this locally

### Repo Instructions
- fork and clone this repo
- in terminal: `npm install` (follow instructions if any)

### Run Locally
- in terminal: `npm run dev`
- open resulting local link in your browser

## Things to implement someday/maybe
- [ ] local storage of highscore
- [ ] image resizing (see notes) before load
- [ ] remove text for more consistent card sizes
- [ ] make components more reusable

## Disclaimers

### Blizzard Entertainment®

Blizzard Entertainment is a trademark or registered trademark of Blizzard Entertainment, Inc. in the U.S. and/or other countries. All rights reserved.

### Hearthstone®: Heroes of Warcraft™

©2014 Blizzard Entertainment, Inc. All rights reserved. Heroes of Warcraft is a trademark, and Hearthstone is a registered trademark of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

### API

For this website I made use of the [Heartstone API by omgvamp](https://rapidapi.com/omgvamp/api/hearthstone/)