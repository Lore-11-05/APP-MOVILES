import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-hola',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mi-hola.html',
  styleUrl: './mi-hola.css',
})
export class MiHola {
  
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  
  aceptar() {
   
    console.log('=== Datos del formulario ===');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('===========================');
    
    alert(` Datos capturados:\n\nNombre: ${this.nombre}\nEmail: ${this.email}\nTeléfono: ${this.telefono}`);
    
   
  }
}