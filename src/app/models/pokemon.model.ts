export type PokemonModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: unknown;
};

export type MinimumPokemon = {
  name: string;
  url: string;
  officialPokemonArt: string;
};
