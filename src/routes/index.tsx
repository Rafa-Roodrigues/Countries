import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../components/Header';

import { Country } from '../pages/Country';
import { Home } from '../pages/Home';

export function Router() {
 
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/country/:name" element={<Country/> }/>
        <Route path="*" element={() => <h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}