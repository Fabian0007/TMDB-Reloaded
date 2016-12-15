/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchexpandedComponent } from './searchexpanded.component';

describe('SearchexpandedComponent', () => {
  let component: SearchexpandedComponent;
  let fixture: ComponentFixture<SearchexpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchexpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchexpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
