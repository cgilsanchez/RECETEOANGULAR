import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CooksPage } from './cooks.page';

describe('CooksPage', () => {
  let component: CooksPage;
  let fixture: ComponentFixture<CooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
