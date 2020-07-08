import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
export default function Home() {
  const [citiesData, setCitiesData] = useState("");
  useEffect(async () => {
    axios
      .get("http://localhost:4000/cities")
      .then(({ data }) => {
        console.log(data);
        setCitiesData(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="container p-5">
      <label htmlFor="" className="label">
        Popular Cities
      </label>
      <Select options={citiesData.popularCities?.map((el) => ({ value: el, label: el }))} />

      <label htmlFor="" className="label mt-4">
        Other Cities
      </label>
      <Select options={citiesData.otherCities?.map((el) => ({ value: el, label: el }))} />
    </div>
  );
}
