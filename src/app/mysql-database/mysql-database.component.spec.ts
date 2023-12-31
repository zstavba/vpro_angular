import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlDatabaseComponent } from './mysql-database.component';

describe('MysqlDatabaseComponent', () => {
  let component: MysqlDatabaseComponent;
  let fixture: ComponentFixture<MysqlDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysqlDatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysqlDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
