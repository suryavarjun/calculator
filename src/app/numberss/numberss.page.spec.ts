import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberssPage } from './numberss.page';

describe('NumberssPage', () => {
  let component: NumberssPage;
  let fixture: ComponentFixture<NumberssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
