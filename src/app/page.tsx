import React from 'react';
import Link from 'next/link';

type PokemonForm = {
  name: string;
  url: string;
};

type PokemonInfo = {
  forms: PokemonForm[];
};

export const pickRandomPokemonNumber = (): number => {
  const min = 1;
  const max = 1010;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPokemonData = async (): Promise<PokemonInfo> => {
  const randomPokemon = pickRandomPokemonNumber();
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`, { cache: 'no-store' });
  const data = await apiResponse.json();
  return data;
};

export const Home = async () => {
  const testVariable = 'some test';
  const pokemonData = await getRandomPokemonData();
  const { name } = pokemonData.forms[0];

  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href="/dashboard">
              <button type="button"> To Dashboard</button>
            </Link>
          </li>
          <li>
            <Link href="/orders/1234">
              <button type="button"> To Orders</button>
            </Link>
          </li>
          <li>Nav 1</li>
        </ul>
      </div>
      <h1>{'Austin\'s Blog'}</h1>
      <h3>{testVariable}</h3>
      <h4>{name}</h4>
    </main>
  );
};

export default Home;
