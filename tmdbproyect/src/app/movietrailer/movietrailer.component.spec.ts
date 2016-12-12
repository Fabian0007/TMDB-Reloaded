/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovietrailerComponent } from './movietrailer.component';

describe('MovietrailerComponent', () => {
  let component: MovietrailerComponent;
  let fixture: ComponentFixture<MovietrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
