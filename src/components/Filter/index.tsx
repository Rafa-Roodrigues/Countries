import { useEffect, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { Select } from './style';

export function Filter() {
  const [continent, setContinent] = useState(() => {
    const existsContinent = localStorage.getItem("@CONTINENT");

    if (!existsContinent) return "all continents";

    return JSON.parse(existsContinent);
  });

  const { request } = useCountries();

  const listContinents = ["all continents", "africa", "americas", "asia", "europe", "oceania"];

  useEffect(() => {
    if(continent !== "all continents") {
      request(`region/${continent}`);
    } else {
      request("all");
    }
  }, [continent]);

  function changeContinent(value: string) {
    localStorage.setItem("@CONTINENT", JSON.stringify(value));
    setContinent(value);
  }

  return (
    <Select 
      name="countries"
      id="countries"
      onChange={(e) => changeContinent(e.target.value)}
      defaultValue={continent}
    >
      {listContinents.map(con => (
        <option
          key={con} 
          value={con}
          selected={continent === con ? true : false}
        >
          {con}
        </option>
      ))}
    </Select>
  );
}
