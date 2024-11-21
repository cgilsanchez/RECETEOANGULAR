import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistarecetaPage } from './vistareceta.page';

describe('VistarecetaPage', () => {
  let component: VistarecetaPage;
  let fixture: ComponentFixture<VistarecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistarecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
