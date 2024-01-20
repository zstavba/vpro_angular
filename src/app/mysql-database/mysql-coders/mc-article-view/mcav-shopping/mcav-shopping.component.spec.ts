import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavShoppingComponent } from './mcav-shopping.component';

describe('McavShoppingComponent', () => {
  let component: McavShoppingComponent;
  let fixture: ComponentFixture<McavShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavShoppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
