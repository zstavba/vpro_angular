import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McArticlesComponent } from './mc-articles.component';

describe('McArticlesComponent', () => {
  let component: McArticlesComponent;
  let fixture: ComponentFixture<McArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
