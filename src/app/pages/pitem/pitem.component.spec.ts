import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitemComponent } from './pitem.component';

describe('PitemComponent', () => {
  let component: PitemComponent;
  let fixture: ComponentFixture<PitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PitemComponent]
    });
    fixture = TestBed.createComponent(PitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
