import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Pokemon } from '../interfaces/pokemon.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  pokemons: Pokemon[] = [];
  API_URL: String = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }


  getPokemon(): Observable<any> {
    return this.http.get<Pokemon[]>(`${this.API_URL}/pokemon`);
  }
}
