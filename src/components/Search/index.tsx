import { Container, Form, Select } from './style';

import { AiOutlineSearch } from 'react-icons/ai';

export function Search() {
  return(
    <Container>
      <Form>
        <button type="submit">
          <AiOutlineSearch size={25}/>
        </button>
        <input type="text" placeholder="Search for a country..."/>
      </Form>

      <Select name="countries" id="countries">
        <option value="">Filter by Region</option>
        <option value="asis">Asia</option>
        <option value="americas">Americas</option>
      </Select>
    </Container>
  );
}