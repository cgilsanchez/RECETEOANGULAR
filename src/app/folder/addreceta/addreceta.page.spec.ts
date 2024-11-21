import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddrecetaPage } from './addreceta.page';

describe('AddrecetaPage', () => {
  let component: AddrecetaPage;
  let fixture: ComponentFixture<AddrecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
