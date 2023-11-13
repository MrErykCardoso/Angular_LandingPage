import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp00Component } from './comp00.component';

describe('Comp00Component', () => {
  let component: Comp00Component;
  let fixture: ComponentFixture<Comp00Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp00Component]
    });
    fixture = TestBed.createComponent(Comp00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
