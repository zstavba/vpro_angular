import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavUsersComponent } from './mcav-users.component';

describe('McavUsersComponent', () => {
  let component: McavUsersComponent;
  let fixture: ComponentFixture<McavUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
