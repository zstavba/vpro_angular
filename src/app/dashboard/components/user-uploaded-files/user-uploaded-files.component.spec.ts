import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadedFilesComponent } from './user-uploaded-files.component';

describe('UserUploadedFilesComponent', () => {
  let component: UserUploadedFilesComponent;
  let fixture: ComponentFixture<UserUploadedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserUploadedFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserUploadedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
