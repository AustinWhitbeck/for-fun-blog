import { getRandomPokemonData } from '@/app/layout';
import firstLetterUppercase from '@/helper-functions/firstLetterUppercase';
import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }: { params: { pokemonNumber: string } }) {
  const { pokemonNumber } = params;
  return {
    title: `Pokemon Number: ${pokemonNumber}`,
  };
}

export const RandomPokemon = async ({ params }: { params: { pokemonNumber: string } }) => {
  const { pokemonNumber } = params;
  const randomPokemonData = await getRandomPokemonData({ number: parseInt(pokemonNumber, 10) });
  const { name, sprites } = randomPokemonData;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { back_default, front_default } = sprites;
  const pokemonName = firstLetterUppercase(name);
  return (
    <div>
      <h1>
        {`Random Pokemon: ${pokemonName}`}
      </h1>
      <Image src={front_default} alt="Sprite Front" width={200} height={200} />
      <Image src={back_default} alt="Sprite Back" width={200} height={200} />

    </div>
  );
};

export default RandomPokemon;
