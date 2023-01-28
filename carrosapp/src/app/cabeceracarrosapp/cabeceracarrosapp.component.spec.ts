import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceracarrosappComponent } from './cabeceracarrosapp.component';

describe('CabeceracarrosappComponent', () => {
  let component: CabeceracarrosappComponent;
  let fixture: ComponentFixture<CabeceracarrosappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceracarrosappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceracarrosappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
