import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlCodersComponent } from './mysql-coders.component';

describe('MysqlCodersComponent', () => {
  let component: MysqlCodersComponent;
  let fixture: ComponentFixture<MysqlCodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysqlCodersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysqlCodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
