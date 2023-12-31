import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McavGroupsComponent } from './mcav-groups.component';

describe('McavGroupsComponent', () => {
  let component: McavGroupsComponent;
  let fixture: ComponentFixture<McavGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McavGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McavGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
