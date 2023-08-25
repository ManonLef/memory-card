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

## Todo's
- [x] research API to use
