import { useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { Select } from './style';

export function Filter() {
  const [continent, setContinent] = useState("");

  const { request } = useCountries();

  function handleChange(con: string) {
    setContinent(con);
    if(con != "all") {
      request(`region/${con}`);
    } else {
      request("all");
    }
  }

  return (
    <Select 
      name="countries"
      id="countries"
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="all" selected={continent === "" ? true : false}>
        All Continents
      </option>
      <option value="africa" selected={continent === "africa" ? true : false}>Africa</option>
      <option value="americas" selected={continent === "americas" ? true : false}>Americas</option>
      <option value="asia" selected={continent === "asia" ? true : false}>Asia</option>
      <option value="europe" selected={continent === "europe" ? true : false}>Europe</option>
      <option value="oceania" selected={continent === "oceania" ? true : false}>Oceania</option>
    </Select>
  );
}
