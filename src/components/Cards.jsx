import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

export default function Cards({ scoreUp, end }) {
  const [cardBacks, setCardBacks] = useState([]);

  useEffect(() => {
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
        // filter only cards with a back image
        const cardsWithImg = cardsData.filter((card) =>
          Object.prototype.hasOwnProperty.call(card, "img")
        );
        cardsWithImg.map(
          (card) => ((card.key = card.cardBackId), (card.clicked = false))
        );
        setCardBacks(shuffle(cardsWithImg));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleClick(key) {
    const newCardBacks = [...cardBacks];
    const card = newCardBacks.find((card) => card.key === key);

    if (!card.clicked) {
      card.clicked = true;
      setCardBacks(shuffle(newCardBacks));
      scoreUp();
    } else {
      end();
    }
  }

  const cardsToShow = 10;
  return (
    <div className="font-normal flex gap-4 flex-wrap justify-center m-4">
      {cardBacks.slice(0, cardsToShow).map((back) => (
        <Card
          key={back.key}
          id={back.key}
          src={back.img}
          alt={back.name}
          width="200"
          onClick={() => handleClick(back.key)}
        />
      ))}
    </div>
  );
}

// helper(s)

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array
}

Cards.propTypes = {
  scoreUp: PropTypes.func,
  end: PropTypes.func,
}