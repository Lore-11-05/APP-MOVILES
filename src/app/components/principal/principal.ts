import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [Tarjeta],  
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']
})
export class PrincipalComponent {
  // Función que recibe el evento del hijo
  eventoRecibido(evento: number) {
    console.log(`El evento recibido es: ${evento}`);
  }
}