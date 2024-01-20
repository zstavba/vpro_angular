import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavDescriptionComponent } from './mcav-description.component';

describe('McavDescriptionComponent', () => {
  let component: McavDescriptionComponent;
  let fixture: ComponentFixture<McavDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
