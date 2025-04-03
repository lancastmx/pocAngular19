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
  name = 'Angel';
  age = 32;
  disabled = true;
  items = [
  ]
  frutas = [
    'manzana',
    'pera',
    'melon'
  ]
  img = 'https://picsum.photos/200/300'
  person = {
    name: 'Angel',
    age: 32,
    avatar:'https://picsum.photos/200/300'
  }
}
