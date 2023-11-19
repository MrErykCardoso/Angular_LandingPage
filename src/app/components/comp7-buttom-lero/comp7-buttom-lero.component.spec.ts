import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7ButtomLeroComponent } from './comp7-buttom-lero.component';

describe('Comp7ButtomLeroComponent', () => {
  let component: Comp7ButtomLeroComponent;
  let fixture: ComponentFixture<Comp7ButtomLeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp7ButtomLeroComponent]
    });
    fixture = TestBed.createComponent(Comp7ButtomLeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
