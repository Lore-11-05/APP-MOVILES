import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: [],
})
export class HomePage implements OnInit {
  task: string = '';
  tareas: string[] = [];
  mensajeError: string = '';

  ngOnInit() {
    this.loadTasks();
    if (this.tareas.length === 0) {
      this.tareas = ['tarea5', 'tarea1', 'tarea4', 'tarea2', 'tarea3'];
      this.saveTasks();
    }
  }

  ordenarTareas() {
    this.tareas.sort((a, b) => b.length - a.length);
  }

  addTask() {
    if (this.task.trim()) {
      this.tareas.push(this.task.trim());
      this.task = '';
      this.ordenarTareas();
      this.saveTasks();
      this.mensajeError = '';
      alert('Tarea agregada ');
    } else {
      this.mensajeError = 'Escribe una tarea antes de agregar';
    }
  }

  deleteTask(index: number) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.tareas.splice(index, 1);
      this.saveTasks();
      alert('Tarea eliminada 🗑️');
    }
  }

  loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      this.tareas = JSON.parse(saved);
      this.ordenarTareas();
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tareas));
  }
}