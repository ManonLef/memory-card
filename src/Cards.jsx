import { useEffect } from "react";

export default function Cards() {
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
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <div>hi</div>;
}
