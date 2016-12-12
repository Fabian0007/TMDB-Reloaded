/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntheatersComponent } from './intheaters.component';

describe('IntheatersComponent', () => {
  let component: IntheatersComponent;
  let fixture: ComponentFixture<IntheatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntheatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
