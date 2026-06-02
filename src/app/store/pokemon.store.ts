import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { MinimumPokemon, PokemonModel } from '../models/pokemon.model';
import { inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { toMinimumPokemon } from '../transformer/minimum-pokemon.transformer';

type PokemonState = {
  pokemons: MinimumPokemon[];
};

const INITIAL_STATE: PokemonState = {
  pokemons: [],
};

export const PokemonStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_STATE),
  withMethods((store, pokemonService = inject(PokemonService)) => ({
    setMinimumPokemons(pokemons: MinimumPokemon[]) {
      patchState(store, (_) => ({
        pokemons,
      }));
    },
    fetchMinimumPokemons() {
      pokemonService
        .getPokemons()
        .pipe()
        .subscribe((pokemons: PokemonModel) => {
          const minimumPokemon = toMinimumPokemon(pokemons);
          this.setMinimumPokemons(minimumPokemon);
        });
    },
  })),
);
