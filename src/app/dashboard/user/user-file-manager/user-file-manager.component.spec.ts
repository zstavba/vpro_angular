import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFileManagerComponent } from './user-file-manager.component';

describe('UserFileManagerComponent', () => {
  let component: UserFileManagerComponent;
  let fixture: ComponentFixture<UserFileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFileManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
