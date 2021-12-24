import { BsArrowLeft } from 'react-icons/bs';

import { 
  Container, 
  ContainerImageCountry, 
  ContainerInfo,
  ContainerBack,
  ButtonBack
} from './style';

import { useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

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

export function Country() {
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const { name } = useParams();

  useEffect(() => {
    async function request() {
      const response = await api.get(`/name/${name}?fullText=true`);
      setCountries(response.data);
    }

    request()
  }, [name])
  

  return (
    countries.length > 0 ? (
      <>
        <ContainerBack>
          <ButtonBack to="/">
            <BsArrowLeft/>
            Back
          </ButtonBack>
        </ContainerBack>
        <Container>
          <ContainerImageCountry>
            <img src={countries[0].flags.svg} alt="Belgium"/>
          </ContainerImageCountry>
          <div className="section-info">
            <h2>{countries[0].name.common}</h2>
            <ContainerInfo>
              <div className="box-info">
                <p>Official Name: <span>{countries[0].name.official}</span></p>
                <p>Region: <span>{countries[0].region}</span></p>
                <p>Sub Region: <span>{countries[0].subregion}</span></p>
                <p>Capital: <span>{countries[0].capital}</span></p>
              </div>
              <div className="box-general-info">
                <p>Population: 
                  <span>
                    {" " + Intl.NumberFormat("pt-br", {style: "decimal"}).format(countries[0].population)}
                  </span>
                </p>
                {countries[0].fifa && (
                  <p>Fifa: <span>{countries[0].fifa}</span></p>
                )}
                <a href={countries[0].maps.googleMaps} rel="noreferrer" target="_blank"><p>Google Maps</p></a> 
              </div>
              <div className="box-border-countries">
                {countries[0].borders && (
                  <p>Border Countries:
                    {countries[0].borders.map((border, index) => <button key={index}>{border}</button>)}
                  </p>
                )}
              </div>
            </ContainerInfo>
          </div>
        </Container>
      </>
    ) : <Loading/>
  )
}