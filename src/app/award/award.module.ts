import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardthingComponent } from './awardthing/awardthing.component';
import { AwardRoutingModule } from './award-routing.module';
import { ListComponent } from '../list/list.component';
import { FormsModule } from '@angular/forms';

// import { ListModule } from '../list/list.module';
// import { ListComponent } from '../list/list/list.component';
// import { ListComponent } from '../list/list/list.component';

@NgModule({
  declarations: [
    AwardthingComponent,
    // ListComponent
    // ListComponent,
  ],
  imports: [
    CommonModule,
    AwardRoutingModule,
    ListComponent,
    FormsModule,
  ]
})
export class AwardModule { }
