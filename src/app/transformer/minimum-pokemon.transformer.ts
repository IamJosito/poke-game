import { MinimumPokemon, PokemonModel } from '../models/pokemon.model';

export function toMinimumPokemon(pokemonModel: PokemonModel): MinimumPokemon[] {
  const pokemonResults = pokemonModel.results as MinimumPokemon[];
  return pokemonResults.map((pok) => ({
    name: capitalizeFirstLetter(pok.name),
    url: pok.url,
    officialPokemonArt: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(pok.url)}.png`,
  }));
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getPokemonIdFromUrl(pokemonUrl: string): number {
  const match = pokemonUrl.match(/\/(\d+)\/?$/);
  return match ? Number(match[1]) : 0;
}
