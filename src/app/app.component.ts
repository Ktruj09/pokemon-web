import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon_web_kevin_villeda';
}
