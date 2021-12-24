import { Form } from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { FormEvent, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';

export function Search() {
  const [input, setInput]= useState("");

  const { request } = useCountries();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    request(`name/${input}`);
    setInput("");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <button type="submit">
        <AiOutlineSearch size={25}/>
      </button>
      <input 
        type="text" 
        placeholder="Search for a country..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Form>
  )
}