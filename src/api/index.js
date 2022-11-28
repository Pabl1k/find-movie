import { useEffect, useState } from "react";

export const GetMoviesAPI = () => {
  const url = `https://imdb-api.com/en/API/Top250Movies/k_ekb8v2r4`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.errorMessage) {
          alert(data.errorMessage);
        }

        return setData(data.items);
      });
  }, []);

  return data;
};
