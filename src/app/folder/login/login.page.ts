import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Formulario reactivo

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Configuración del formulario reactivo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo obligatorio y validación de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo obligatorio con longitud mínima
    });
  }

  // Método para manejar el inicio de sesión
  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; // Obtener valores del formulario
      this.authService.login(email, password).subscribe(
        (res: any) => {
          console.log('Inicio de sesión exitoso:', res);
          this.router.navigate(['/home']); // Redirigir al usuario a la página principal
        },
        (err: any) => {
          console.error('Error en el inicio de sesión:', err);
        }
      );
    }
  }

  // Método para obtener mensajes de error personalizados
  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.hasError('required')) return 'Este campo es obligatorio';
    if (field === 'email' && control?.hasError('email')) return 'El email no es válido';
    if (field === 'password' && control?.hasError('minlength')) return 'La contraseña debe tener al menos 6 caracteres';
    return '';
  }
}
