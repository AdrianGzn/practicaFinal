import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url = "https://pokeapi.co/api/v2/"; 
  constructor(private http: HttpClient) { }


  getPokemons(): Observable<any> {
    return this.http.get(`${this.url}`)
  }
  
}
