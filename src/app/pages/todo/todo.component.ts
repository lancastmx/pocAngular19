import { Component, computed,effect , inject, Injector, signal } from '@angular/core';
import { Task } from './model/tasks.model';
import { CommonModule} from '@angular/common';
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

 tasks = signal<Task[]> ([])

filter = signal('all');
injector = inject(Injector)

taskByFilter = computed(() =>{
  const filter = this.filter();
  const tasks = this.tasks();
  if (filter === 'pending'){
    return tasks.filter( task => !task.completed)
  }
  if (filter === 'completed'){
    return tasks.filter(task => task.completed)
  }
  return tasks;
})


newTaskCtrl = new FormControl('', {
  nonNullable: true,
  validators:[
    Validators.required,
  ]
});


ngOnInit(){
  const storage = localStorage.getItem('tasks');
  if (storage) {
    const tasks = JSON.parse(storage);
    this.tasks.set(tasks)
  }
  this.trackTasks();
}
trackTasks(){
  effect(()=> {
    const tasks = this.tasks();
    console.log('Corriendo effect')
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, {injector: this.injector});
}
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

 changeFilter(filter: string){
  this.filter.set(filter)
 }
}
