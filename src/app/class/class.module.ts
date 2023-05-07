import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassthingComponent } from './classthing/classthing.component';
import { ClassRoutingModule } from './class-routing.module';
import { ListComponent } from '../list/list.component';
import { FormsModule } from '@angular/forms';
import { SearchPipes } from '../search.pipe';


@NgModule({
  declarations: [
    ClassthingComponent,
    SearchPipes
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ListComponent,
    FormsModule,
  ],
  exports: [
    ClassthingComponent
  ]
})
export class ClassModule { }
