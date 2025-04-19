import { Routes } from '@angular/router';
import { LabComponent } from './pages/lab/lab.component';
import { TodoComponent } from './pages/todo/todo.component';
export const routes: Routes = [
  // {
  //   path: '',
  //   component: LabComponent
  // },
  {
    path: '',
    component:TodoComponent
  }
];
