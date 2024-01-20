import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavCodesComponent } from './mcav-codes.component';

describe('McavCodesComponent', () => {
  let component: McavCodesComponent;
  let fixture: ComponentFixture<McavCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
