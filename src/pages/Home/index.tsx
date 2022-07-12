import { Loading } from "../../components/Loading";
import { Search } from '../../components/Search';
import { Filter } from '../../components/Filter';

import { Container, Card, ContainerSearchFilter } from './style';
import { useCountries } from "../../hooks/useCountries";

export function Home() {
  const { countries } = useCountries();

  return (
    <>
      <ContainerSearchFilter>
        <Search />
        <Filter />
      </ContainerSearchFilter>
      {countries.length > 0 ? (
        <>
          <Container>
            {countries.map(country => (
              <Card key={country.name.common} to={`/country/${country.name.common}`}>
                <img src={country.flags.svg} alt={`flag of ${country.name.common}`}></img>
                <div>
                  <h3>{country.name.common}</h3>
                  <p>
                    Population:
                    <span>
                      {Intl.NumberFormat("pt-br", { style: "decimal" }).format(country.population)}
                    </span>
                  </p>
                  <p>Region: <span>{country.region}</span></p>
                  <p>Capital: <span>{country.capital}</span></p>
                </div>
              </Card>
            ))}
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

// export function Home() {
//   const { countries } = useCountries();

//   return(
//     <>
//       {countries.length > 0 ? (
//         <>
//           <ContainerSearchFilter>
//             <Search/>
//             <Filter/>
//           </ContainerSearchFilter>
//           <Container>
//             {countries.map(country => (
//               <Card key={country.name.common} to={`/country/${country.name.common}`}>
//                 <img src={country.flags.svg} alt={`flag of ${country.name.common}`}></img>
//                 <div>
//                   <h3>{country.name.common}</h3>
//                   <p>
//                     Population:
//                     <span>
//                       {Intl.NumberFormat("pt-br", {style: "decimal"}).format(country.population)}
//                     </span>
//                   </p>
//                   <p>Region: <span>{country.region}</span></p>
//                   <p>Capital: <span>{country.capital}</span></p>
//                 </div>
//               </Card>
//             ))}
//           </Container>
//         </>
//       ) : (
//         <Loading/>
//       )}
//     </>
//   )
// }
