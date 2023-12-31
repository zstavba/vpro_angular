import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTableCodeComponent } from './sql-table-code.component';

describe('SqlTableCodeComponent', () => {
  let component: SqlTableCodeComponent;
  let fixture: ComponentFixture<SqlTableCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlTableCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqlTableCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
