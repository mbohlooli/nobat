import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DoctorInfoComponent} from "./doctor-info/doctor-info.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'doctor/:id',
    component: DoctorInfoComponent
  },
];
