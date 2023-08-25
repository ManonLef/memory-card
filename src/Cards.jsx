import { useEffect, useState } from "react";

export default function Cards() {
  const [cardBacks, setCardBacks] = useState([]);

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
        const selection = data.sort(() => 0.5 - Math.random()).slice(0, 20);
        selection.map((card) => ((card.key = card.cardBackId), (card.count = 0)));
        setCardBacks(selection);
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
          <img key={back.key} src={back.imgAnimated} width="250" />
        ) : null
      )}
    </div>
  );
}
