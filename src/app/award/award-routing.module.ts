import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardthingComponent } from './awardthing/awardthing.component';

const routes: Routes = [
  {path: '', component: AwardthingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardRoutingModule { }
