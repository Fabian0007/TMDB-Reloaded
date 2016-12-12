/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviecastComponent } from './moviecast.component';

describe('MoviecastComponent', () => {
  let component: MoviecastComponent;
  let fixture: ComponentFixture<MoviecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
