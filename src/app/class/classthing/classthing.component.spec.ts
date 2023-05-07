import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassthingComponent } from './classthing.component';

describe('ClassthingComponent', () => {
  let component: ClassthingComponent;
  let fixture: ComponentFixture<ClassthingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassthingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
