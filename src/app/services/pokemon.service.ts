import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly http = inject(HttpClient);

  private apiUrl = 'https://pokeapi.co/api/v2/';

  getPokemons() {
    return this.http.get<PokemonModel>(`${this.apiUrl}\pokemon?limit=151`);
  }
}
