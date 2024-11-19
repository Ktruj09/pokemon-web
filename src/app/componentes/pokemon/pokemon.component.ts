import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MdbCheckboxModule, CommonModule],
  providers: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonServiceService){}

  ngOnInit(): void {
    console.log('Obteniendo pokemons')
    this.getPokemons();
   
  }


  getPokemons(): void{
    this.pokemonService.getPokemon().subscribe((pokemon) =>{
      this.pokemons = pokemon.results;
    });
  }

}
