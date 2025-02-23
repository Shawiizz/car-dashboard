import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MiddleGraduationComponent} from './middle-graduation.component';

describe('MiddleGraduationComponent', () => {
  let component: MiddleGraduationComponent;
  let fixture: ComponentFixture<MiddleGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleGraduationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MiddleGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
