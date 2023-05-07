import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassthingComponent } from './classthing/classthing.component';

const routes: Routes = [
  {path: '', component: ClassthingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
