import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocinerosPage } from './cocineros.page';

describe('CocinerosPage', () => {
  let component: CocinerosPage;
  let fixture: ComponentFixture<CocinerosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
