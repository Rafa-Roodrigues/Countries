import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';
import { NotFound } from '../pages/NotFound';

import { Country } from '../pages/Country';
import { Home } from '../pages/Home';

export function Router() {
 
  return(
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/country/:name" element={<Country/> }/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}