import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp6Component } from './comp6.component';

describe('Comp6Component', () => {
  let component: Comp6Component;
  let fixture: ComponentFixture<Comp6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp6Component]
    });
    fixture = TestBed.createComponent(Comp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
