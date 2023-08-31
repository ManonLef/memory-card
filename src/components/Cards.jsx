import { useEffect, useState } from "react";

export default function Cards({ scoreUp, end }) {
  const [cardBacks, setCardBacks] = useState([]);

  useEffect(() => {
    console.log("fetching");
    const fetchData = async () => {
      const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2390dfc834mshaa88e9fce056958p13a829jsned1a12fc1efa",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const cardsData = await response.json();
        console.log(cardsData)
        // filter only cards with a back image
        const cardsWithImg = cardsData.filter((card) =>
          Object.prototype.hasOwnProperty.call(card, "img")
        );
        cardsWithImg.map(
          (card) => ((card.key = card.cardBackId), (card.clicked = false))
        );
        setCardBacks(cardsWithImg);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function shuffle() {
    const shuffledArray = [...cardBacks];
    let currentIndex = shuffledArray.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }

    setCardBacks(shuffledArray);
  }

  function handleClick(key) {
    const newCardBacks = [...cardBacks];
    const card = newCardBacks.find((card) => card.key === key);

    if (!card.clicked) {
      card.clicked = true;
      console.log("clicked card: ", card.key);
      setCardBacks(newCardBacks);
      shuffle();
      scoreUp();
    } else {
      console.log("ending with clicked card: ", card.key);
      end();
    }
  }

  const cardsToShow = 10;
  return (
    <div>
      {cardBacks.slice(0, cardsToShow).map((back) => (
        <img
          key={back.key}
          src={back.img}
          alt={back.name + " Heartstone card back illustration"}
          width="200"
          onClick={() => handleClick(back.key)}
        />
      ))}
    </div>
  );
}
