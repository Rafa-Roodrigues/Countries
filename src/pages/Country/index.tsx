import { BsArrowLeft } from 'react-icons/bs';

import { 
  Container, 
  ContainerImageCountry, 
  ContainerInfo,
  ContainerBack,
  ButtonBack
} from './style';

import belgiumImg from '../../images/belgium.png';


export function Country() {
  return (
    <>
      <ContainerBack>
        <ButtonBack to="/">
          <BsArrowLeft/>
          Back
        </ButtonBack>
      </ContainerBack>
      <Container>
        <ContainerImageCountry>
          <img src={belgiumImg} alt="Belgium"/>
        </ContainerImageCountry>
        <div className="section-info">
          <h2>Belgium</h2>
          <ContainerInfo>
            <div className="box-info">
              <p>Native Name: <span>Belgiê</span></p>
              <p>Region: <span>Europa</span></p>
              <p>Sub Region: <span>Western Europe</span></p>
              <p>Capital: <span>Western Brussels</span></p>
            </div>
            <div className="box-general-info">
              <p>Top Level Domain: <span>be</span></p>
              <p>Currencies: <span>Euro</span></p>
              <p>Languages: <span>Dutch, French, German</span></p>
            </div>
            <div className="box-border-countries">
              <p>Border Countries:
                <button>France</button>
                <button>Germany</button>
              </p>
            </div>
          </ContainerInfo>
        </div>
      </Container>
    </>
  )
}