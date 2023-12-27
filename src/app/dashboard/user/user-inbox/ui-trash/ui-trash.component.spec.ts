import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTrashComponent } from './ui-trash.component';

describe('UiTrashComponent', () => {
  let component: UiTrashComponent;
  let fixture: ComponentFixture<UiTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTrashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
