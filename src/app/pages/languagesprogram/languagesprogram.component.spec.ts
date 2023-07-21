import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesprogramComponent } from './languagesprogram.component';

describe('LanguagesprogramComponent', () => {
  let component: LanguagesprogramComponent;
  let fixture: ComponentFixture<LanguagesprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagesprogramComponent]
    });
    fixture = TestBed.createComponent(LanguagesprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
