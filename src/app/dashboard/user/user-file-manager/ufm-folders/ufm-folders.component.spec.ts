import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfmFoldersComponent } from './ufm-folders.component';

describe('UfmFoldersComponent', () => {
  let component: UfmFoldersComponent;
  let fixture: ComponentFixture<UfmFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfmFoldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UfmFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
