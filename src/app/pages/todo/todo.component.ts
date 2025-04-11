import { Component, signal } from '@angular/core';
import { Task } from './model/tasks.model';
import { title } from 'process';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
//  tasks = signal([
//   'Leer',
//   'Hacer Poc de cursos',
//   'Hacer ejercicio',
//   'Preparar presentación'
//  ])

 tasks = signal<Task[]> ([
  {
  id: Date.now(),
  title: 'Tarea 1 standar',
  completed: false,
  },
  {
    id: Date.now(),
    title: 'Tarea 2 standar',
    completed: false,
  }
])
changerHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
  this.addTask(newTask)
 }

 addTask(title: string){
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };
  this.tasks.update((tasks) => [...tasks, newTask] )
 }



 deleteTask(index: number){
  this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
 }
}
