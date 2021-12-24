import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { toast } from 'react-toastify';

interface CountryProps {
  flags: {
    svg: string;
  };
  name: {
    official: string;
    common: string;
  };
  maps: {
    googleMaps: string;
  }
  borders: string[];
  region: string;
  subregion: string;
  capital: string;
  population: number;
  fifa: string;
}

interface CountriesProviderProps {
  children: ReactNode;
}

interface CountriesContextProps {
  countries: CountryProps[];
  request: (endpoint: string) => void;
}

const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

export function CountriesProvider({children}: CountriesProviderProps) {
  const [countries, setCountries] = useState<CountryProps[]>([]);

  useEffect(() => {
    async function temp() {
      const response = await api.get("all");
      setCountries(response.data);
    }

    temp();
  }, []);

  async function request(endpoint: string) {
    try {
      const response = await api.get(endpoint);
      setCountries(response.data);
    } catch(err) {
      toast.error("Country not found.")
    }
  }

  return (
    <CountriesContext.Provider value={{countries, request}}>
      {children}
    </CountriesContext.Provider>
  )
}

export function useCountries() {
  return useContext(CountriesContext);
}