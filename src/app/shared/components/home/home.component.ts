import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CardPokemonComponent } from "../card-pokemon/card-pokemon.component";
import { HeaderpokemonComponent } from "../headerpokemon/headerpokemon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent, HeaderpokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private pokemonService: PokeApiService) {}


  getPokemons(): void  {
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons) => {
        console.log(pokemons)
      },

      error: (error) => {
        console.log(error)
      }
    })
  }
}
