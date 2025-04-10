import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
 tasks = signal([
  'Leer',
  'Hacer Poc de cursos',
  'Hacer ejercicio',
  'Preparar presentación'
 ])
 changerHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
  this.tasks.update((tasks) => [...tasks, newTask] )
 }

 deleteTask(index: number){
  this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
 }
}
