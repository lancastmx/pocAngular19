import { Component, signal } from '@angular/core';
import { Task } from './model/tasks.model';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
   ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

 tasks = signal<Task[]> ([
  {
    id: Date.now(),
    title: 'Tarea 1 standar',
    completed: false,
    editing: false,
  },
  {
    id: Date.now(),
    title: 'Tarea 2 standar',
    completed: false,
    editing: false,
  }
])
newTaskCtrl = new FormControl('', {
  nonNullable: true,
  validators:[
    Validators.required,
  ]
});

changerHandler(){
 if (this.newTaskCtrl.valid){
  const value = this.newTaskCtrl.value.trim();
  if (value !== ''){
    this.addTask(value)
    this.newTaskCtrl.setValue('');
  }
 }

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

 updateTask(index: number){
  this.tasks.update((tasks) => {
    return tasks.map((task, position) => {
      if (position === index) {
        return {
          ...task,
        completed: !task.completed
        }
      }
      return task;
    })
  })
 }

 updateTaskEditMode(index: Number){
  this.tasks.update((tasks) => {
    return tasks.map((task, position) => {
      if (position === index) {
        return {
          ...task,
        editing: true,
        }
      }
      return {
        ...task,
        editing: false
      }
    })
  })
 }
 updateTaskText(index: Number, event: Event){
  const input = event.target as HTMLInputElement;
  this.tasks.update((tasks) => {
    return tasks.map((task, position) => {
      if (position === index) {
        return {
          ...task,
        title: input.value,
        editing: false,
        }
      }
      return task
    })
  })
 }
}
