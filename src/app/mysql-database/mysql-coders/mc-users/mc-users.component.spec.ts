import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McUsersComponent } from './mc-users.component';

describe('McUsersComponent', () => {
  let component: McUsersComponent;
  let fixture: ComponentFixture<McUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
