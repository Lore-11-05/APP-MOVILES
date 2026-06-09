import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage {
  newTaskStr: string = '';
  tareas: any[] = [];
  mensajeError: string = '';

  constructor() {
    this.cargarTareas();
  }

  cargarTareas() {
    const guardadas = localStorage.getItem('tareas');
    if (guardadas) {
      this.tareas = JSON.parse(guardadas);
    }
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  limpiarTexto(texto: string): string {
    return texto.trim();
  }

  existeTarea(titulo: string): boolean {
    return this.tareas.some(tarea => tarea.titulo === titulo);
  }

  task() {
    const tituloLimpio = this.limpiarTexto(this.newTaskStr);
    
    if (tituloLimpio === '') {
      this.mensajeError = '❌ El título no puede estar vacío';
      return;
    }

    if (this.existeTarea(tituloLimpio)) {
      this.mensajeError = '❌ La tarea "' + tituloLimpio + '" ya existe';
      return;
    }

    this.tareas.push({
      id: Date.now(),
      titulo: tituloLimpio,
      completada: false
    });

    this.guardarTareas();
    this.newTaskStr = '';
    this.mensajeError = '';
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.guardarTareas();
  }

  toggleCompletada(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }
}