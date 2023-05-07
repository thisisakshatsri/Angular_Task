import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursethingComponent } from './coursething.component';

describe('CoursethingComponent', () => {
  let component: CoursethingComponent;
  let fixture: ComponentFixture<CoursethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursethingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
