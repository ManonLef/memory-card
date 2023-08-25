# Memory App Notes

## Progress Notes

### 2022-08-25
- started with a new repo
- will need to research API options. Initial wishes:
  - aesthetically pleasing images
  - free API
  - 20 to 30 images available
- Features to implement:
  - scoreboard: current score
  - scoreboard: best score
  - optional local storage

### 2022-08-25 Whole App PseudoCode
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

## Todo's
- [ ] research API to use
