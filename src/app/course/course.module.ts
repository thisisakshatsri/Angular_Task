import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursethingComponent } from './coursething/coursething.component';
import { CourseRoutingModule } from './course-routing.module';
import { ListComponent } from '../list/list.component';
import { SearchPipes } from '../search.pipe';
import { FormsModule } from '@angular/forms';

// import { ListComponent } from '../list/list.component';
// import { ListComponent } from '../list/list.component';
// import { AppModule } from '../app.module';
// import { ListComponent } from '../list/list/list.component';
// import { ListModule } from '../list/list.module';
// import { ListComponent } from '../list/list/list.component';
// import { ListComponent } from '../list/list/list.component';



@NgModule({
  declarations: [
    CoursethingComponent,
    // ListComponent
    // ListComponent,
    SearchPipes
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    
    // ListComponent
    // AppModule
    ListComponent,
    FormsModule
  ],
  exports: [
    CoursethingComponent
  ]
})
export class CourseModule { }
