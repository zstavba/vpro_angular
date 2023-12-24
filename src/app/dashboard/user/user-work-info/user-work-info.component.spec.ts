import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkInfoComponent } from './user-work-info.component';

describe('UserWorkInfoComponent', () => {
  let component: UserWorkInfoComponent;
  let fixture: ComponentFixture<UserWorkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWorkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
