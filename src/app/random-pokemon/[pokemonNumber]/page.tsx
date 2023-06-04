import { getRandomPokemonData, pickRandomPokemonNumber } from '@/app/layout';
import firstLetterUppercase from '@/helper-functions/firstLetterUppercase';
import Image from 'next/image';
import Link from 'next/link';
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
  const nextRandomPokemonNumber = pickRandomPokemonNumber();

  const spritesFrontRender = () => {
    if (front_default && front_default !== null) {
      return <Image src={front_default} alt="Sprite Front" width={200} height={200} />;
    }
    return '';
  };

  const spritesBackRender = () => {
    if (back_default && back_default !== null) {
      return <Image src={back_default} alt="Sprite Front" width={200} height={200} />;
    }
    return '';
  };

  const allSpritesRender = () => (
    <>
      {spritesBackRender()}
      {spritesFrontRender()}
    </>
  );
  return (
    <div>
      <h1>
        {`Random Pokemon: ${pokemonName || 'Error'}`}
      </h1>
      <Link href={`/random-pokemon/${nextRandomPokemonNumber}`}>Next Random Pokemon!</Link>
      {allSpritesRender()}
    </div>
  );
};

export default RandomPokemon;
