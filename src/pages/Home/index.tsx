import { Search } from "../../components/Search";

import brazil from '../../assets/brazil.png';

import {Container, Card} from './style';

export function Home() {
  return(
    <>
      <Search/>
      <Container>
        <Card to="/country/1">
          <img src={brazil} alt="bandeira do brazil"></img>
          <div>
            <h3>Brazil</h3>
            <p>Population: <span>1.210.000.000</span></p>
            <p>Region: <span>Americas</span></p>
            <p>Capital: <span>Brasilia</span></p>
          </div>
        </Card>
        <Card to="/country/1">
          <img src={brazil} alt="bandeira do brazil"></img>
          <div>
            <h3>Brazil</h3>
            <p>Population: <span>210.000.000</span></p>
            <p>Region: <span>Americas</span></p>
            <p>Capital: <span>Brasilia</span></p>
          </div>
        </Card>
        <Card to="/country/1">
          <img src={brazil} alt="bandeira do brazil"></img>
          <div>
            <h3>Brazil</h3>
            <p>Population: <span>210.000.000</span></p>
            <p>Region: <span>Americas</span></p>
            <p>Capital: <span>Brasilia</span></p>
          </div>
        </Card>
        <Card to="/country/1">
          <img src={brazil} alt="bandeira do brazil"></img>
          <div>
            <h3>Brazil</h3>
            <p>Population: <span>210.000.000</span></p>
            <p>Region: <span>Americas</span></p>
            <p>Capital: <span>Brasilia</span></p>
          </div>
        </Card>
      </Container>
    </>
  )
}