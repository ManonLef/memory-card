# Memory App Notes

## Progress Notes

### 2023-08-25
- started with a new repo
- will need to research API options. Initial wishes:
  - aesthetically pleasing images
  - free API
  - 20 to 30 images available
- Features to implement:
  - scoreboard: current score
  - scoreboard: best score
  - optional local storage

### 2023-08-25 Whole App PseudoCode
- start game right upon entering
- display x (tbd) amount of images
- scores should be set to 0 (or if local storage, best score to personal best)
- render random images
- each image should keep count of the amount of times it's clicked
- once user clicks image:
  - check if image wasn't clicked already
    - if it was: end current round and check against personal best (update as needed), reset current score
      optional: ask for new game, otherwise:
    - reload random images in random order

### 2023-08-25 Card loading Pseudo
- Fetch data just once (on mount so wrapped in useEffect)

### 2023-08-25 end of day
- got API data in and utilizing it to display all cards with an image available
- changing the clicked status (key/value) to true when clicking
- Thoughts for next session:
  - add a random/shuffled selection state
  - update said state whenever a card is clicked
  - render new shuffle

### 2023-08-25 API ideas:
- [xkcd comics](https://xkcd.com/json.html)
- [dad jokes](https://icanhazdadjoke.com/api)
- [pet finder](https://www.petfinder.com/developers/v2/docs/) investigate more. Could have the nice addition of being actual pets ready for adoption
- [kittens](https://placekitten.com/)
- [pexels](https://www.pexels.com/api)
- [heartstone](https://rapidapi.com/omgvamp/api/hearthstone)

### 2023-08-30 Planning
- I need to start thinking a bit more about hierarchy now. Especially in regards to the score, game flow etc.
- when card is clicked that wasn't clicked before, score should update. Score function should be passed down to the card I presume so the card can access said prop
- Idea:
  - make score component with a function to update score.
  - pass said function to the card component so it can be used upon click.
- Full game could be parent of score and cards. With an endgame function passed somewhere perhaps?
- At this point I am not entirely sure about this and I will read up about passing props. I remember a guide on react.dev that might be useful.

### 2023-08-31
- I just dove in today which might have been not the best idea.
- Added shuffle and limited card display
- score is added and tracked
- added an endGame
- The Main/parent should keep track of highScore
- if the game ends, I want a new game to render in the main/parent. Need to find a way to do this
  - perhaps add a games played tracker. somehow have that update the key of the game component to force a new mount a.k.a. new set of cards
- at end of game we want a button to show to start a new game in that case. so we probably need to track if it's the end of the game
The above works with the new key, yay!

### 2023-09-02
- Felt a bit silly today when trying to add another shuffle to first render. Then trying to debug the fact it rendered twice because of strictMode while literally having just explained that to someone else earlier in the discord... It's also a topic I dove into more to get more familiar with the component lifecycles in React. 

### 2023-09-11
- Forced break due to covid in our home...
- finished most of the styling

### 2023-09-12
- Looked into image resizing more but seems elaborate with CloudFront and Lambda. 
- each image is now roughly 100kb and that sure is undesirable.
- intend to go through the code once more before shipping it for it seems the objective is complete for a while already. It's not perfect but it seems this was mostly an intro to hooks and state lifting, which is something I feel like I'm grasping enough now to move on. 

## Todo's
- [x] research API to use
- [x] shuffle cards on first render as well
- [ ] add functionality to wait before image is loaded before displaying it, or optimizing it some other way.
