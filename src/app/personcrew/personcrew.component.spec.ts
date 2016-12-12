/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersoncrewComponent } from './personcrew.component';

describe('PersoncrewComponent', () => {
  let component: PersoncrewComponent;
  let fixture: ComponentFixture<PersoncrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoncrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoncrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
