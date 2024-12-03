import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokeApiService) { }
  pokemon: any[] = [];
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (next) => {
        console.log(next)
        for(let index = 0; index < next.results.length; index++) {
          this.pokemonService.getPokemonById(index).subscribe({
            next: (pokemon) => {
              this.pokemon.push({
                name: pokemon.forms.name
              })
            }
          })
        }
      }
    })
  }
  searchPokemon(): void {

  }

}
