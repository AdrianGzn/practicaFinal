import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerpokemon',
  standalone: true,
  imports: [],
  templateUrl: './headerpokemon.component.html',
  styleUrl: './headerpokemon.component.css'
})
export class HeaderpokemonComponent {
  constructor(private router: Router) {}

  onLogOut(): void {
    localStorage.removeItem("user");
    alert('Cierre de sesión exitoso')
    this.router.navigate(['']);
  }

}
