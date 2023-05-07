import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursethingComponent } from './coursething/coursething.component';

const routes: Routes = [
  {path:'', component:CoursethingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
