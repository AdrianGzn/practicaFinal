import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    let name = this.loginForm.value.name;
    let password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      if (name != null && password != null) {
        let newUser: User = {
          name: name,
          password: password,
          pokemon_id: 0
        }
        localStorage.setItem("user", JSON.stringify(newUser));
        this.router.navigate(['/home-pokemon']);
      } else {
        alert('Llene el formulario correctamente.')
      }
    } else {
      alert('Llene el formulario correctamente.')
    }
  }

}
