import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CardPokemonComponent } from "../card-pokemon/card-pokemon.component";
import { HeaderpokemonComponent } from "../headerpokemon/headerpokemon.component";
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { find } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent, HeaderpokemonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokeApiService) { }
  pokemon: Pokemon[] = [];
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (next) => {
        console.log(next)
        for(let index = 0; index < next.results.length; index++) {
          this.pokemonService.getPokemonById(index).subscribe({
            next: (pokemon) => {
              let sprite = ''        
              this.pokemon.push({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.heaight,
                weight: pokemon.weight,
                base_experience: pokemon.base_experience,
                sprite: pokemon.sprites.back_default
              })
            }
          })
        }
      }
    })

    console.log(this.pokemon)
  }
  searchPokemon(): void {

  }

}
