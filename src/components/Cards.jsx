import { useEffect, useState } from "react";

export default function Cards( {scoreUp, end} ) {
  const [cardBacks, setCardBacks] = useState([]);

  function handleClick(key) {
    const newCardBacks = [...cardBacks];
    const card = newCardBacks.find((card) => card.key === key);

    if (!card.clicked) {
      card.clicked = true
      setCardBacks(newCardBacks)
      scoreUp();
    } else {
      end()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c127c179b0mshd01e58517b9df72p14f875jsn27a0bd99e1cb",
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
        setCardBacks(cardsWithImg);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {cardBacks.map((back) => (
        <img
          key={back.key}
          src={back.imgAnimated}
          alt={back.name + " Heartstone card back illustration"}
          width="150"
          onClick={() => handleClick(back.key)}
        />
      ))}
    </div>
  );
}
