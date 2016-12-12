/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersoncastComponent } from './personcast.component';

describe('PersoncastComponent', () => {
  let component: PersoncastComponent;
  let fixture: ComponentFixture<PersoncastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoncastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoncastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
