import { Component, computed, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { PokemonStore } from '../../store/pokemon.store';

@Component({
  selector: 'foo',
  templateUrl: './view-pokemons.component.html',
  imports: [Card, Button, Select, FormsModule],
  providers: [PokemonStore],
  standalone: true,
})
export class ViewPokemonsComponent {
  selectedPokemon: string = '';
  private readonly pokemonStore = inject(PokemonStore);
  pokemons = this.pokemonStore.pokemons;
  pokemonsNames = computed(() =>
    this.pokemons().map((pokemon) => {
      return {
        name: pokemon.name,
        officialPokemonArt: pokemon.officialPokemonArt,
      };
    }),
  );
  loading = computed(() => this.pokemons().length === 0);

  fetchPokemons() {
    this.pokemonStore.fetchMinimumPokemons();
  }
}
