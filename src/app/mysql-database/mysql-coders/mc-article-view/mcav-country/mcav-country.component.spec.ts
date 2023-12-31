import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavCountryComponent } from './mcav-country.component';

describe('McavCountryComponent', () => {
  let component: McavCountryComponent;
  let fixture: ComponentFixture<McavCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
