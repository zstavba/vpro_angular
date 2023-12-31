import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavBasicsComponent } from './mcav-basics.component';

describe('McavBasicsComponent', () => {
  let component: McavBasicsComponent;
  let fixture: ComponentFixture<McavBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
