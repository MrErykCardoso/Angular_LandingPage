import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp8QuadroFraseComponent } from './comp8-quadro-frase.component';

describe('Comp8QuadroFraseComponent', () => {
  let component: Comp8QuadroFraseComponent;
  let fixture: ComponentFixture<Comp8QuadroFraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp8QuadroFraseComponent]
    });
    fixture = TestBed.createComponent(Comp8QuadroFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
