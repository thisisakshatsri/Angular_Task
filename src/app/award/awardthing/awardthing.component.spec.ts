import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardthingComponent } from './awardthing.component';

describe('AwardthingComponent', () => {
  let component: AwardthingComponent;
  let fixture: ComponentFixture<AwardthingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardthingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
