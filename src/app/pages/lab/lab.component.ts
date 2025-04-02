import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-lab',
  standalone:true,
  imports: [
    TodoComponent
  ],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss'
})
export class LabComponent {
  title = 'Laboratiorio';
  items = [
  ]
  frutas = [
    'manzana',
    'pera',
    'melon'
  ]
}
