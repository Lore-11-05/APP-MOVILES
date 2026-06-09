import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() titulo: string = '';
  @Input() contenido: string = '';
  @Input() boton: string = 'Aceptar';
  
  @Output() myvaroutput = new EventEmitter<number>();  // Evento que envía un número
  
  contador: number = 0;  // Contador interno

  // Método que se ejecuta al hacer clic en el botón
  seleccionarTarjeta() {
    this.contador += 1;  // Incrementa el contador
    this.myvaroutput.emit(this.contador);  // Emite el evento con el valor del contador
    console.log(`El contador en el hijo es: ${this.contador}`);  // Console.log en el hijo
  }
}