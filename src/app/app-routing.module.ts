import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'class', loadChildren: () => import('./class/class.module').then(m => m.ClassModule)},
  {path:'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
  {path:'award', loadChildren: () => import('./award/award.module').then(m => m.AwardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
