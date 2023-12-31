import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McBasicsComponent } from './mc-basics.component';

describe('McBasicsComponent', () => {
  let component: McBasicsComponent;
  let fixture: ComponentFixture<McBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
