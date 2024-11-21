import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Configuración del formulario reactivo
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]], // Campo obligatorio para el nombre
        email: ['', [Validators.required, Validators.email]], // Campo obligatorio con validación de email
        password: ['', [Validators.required, Validators.minLength(6)]], // Contraseña mínima de 6 caracteres
        confirmPassword: ['', [Validators.required]], // Campo obligatorio para confirmar contraseña
      },
      { validators: this.passwordsMatchValidator } // Agregar validador personalizado
    );
  }

  // Validador personalizado para verificar que las contraseñas coincidan
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Método para registrar al usuario
  onRegister() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value; // Obtener valores del formulario
      this.authService.register(name, email, password).subscribe(
        (res: any) => {
          console.log('Registro exitoso:', res);
          this.router.navigate(['/login']); // Redirigir al login
        },
        (err: any) => {
          console.error('Error en el registro:', err);
        }
      );
    }
  }

  // Método para obtener los errores de un campo
  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);
    if (control?.hasError('required')) return 'Este campo es obligatorio';
    if (field === 'email' && control?.hasError('email')) return 'El email no es válido';
    if (field === 'password' && control?.hasError('minlength')) return 'La contraseña debe tener al menos 6 caracteres';
    if (field === 'confirmPassword' && this.registerForm.errors?.['passwordMismatch']) return 'Las contraseñas no coinciden';
    return '';
  }
}
