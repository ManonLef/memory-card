import { useEffect, useState } from "react";

export default function Cards() {
  const [cardBacks, setCardBacks] = useState([]);

  function handleClick(key) {
    // make copy of the cardBacks array
    const newCardBacks = [...cardBacks];
    // find the correct card by key
    const card = newCardBacks.find((card) => card.key === key);
    console.log(card.clicked);
    // set card.clicked to true
    card.clicked = true;
    // setCardBacks to the copy
    setCardBacks(newCardBacks);
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
        const data = await response.json();
        data.map(
          (card) => ((card.key = card.cardBackId), (card.clicked = false))
        );
        setCardBacks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {cardBacks.map((back) =>
        back.img ? (
          <img
            key={back.key}
            src={back.imgAnimated}
            alt={back.name + " Heartstone card back illustration"}
            width="250"
            onClick={() => handleClick(back.key)}
          />
        ) : null
      )}
    </div>
  );
}
