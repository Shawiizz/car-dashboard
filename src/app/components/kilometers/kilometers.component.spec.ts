import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KilometersComponent} from './kilometers.component';

describe('KilometersComponent', () => {
  let component: KilometersComponent;
  let fixture: ComponentFixture<KilometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KilometersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KilometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
