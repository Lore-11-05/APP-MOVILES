import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: [],
})
export class HomePage {
  task: string = '';
  tareas: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.tareas.push(this.task.trim());
      this.task = '';
      console.log('Tarea agregada:', this.tareas);
    }
  }

  eliminarTarea(tarea: string) {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }
}