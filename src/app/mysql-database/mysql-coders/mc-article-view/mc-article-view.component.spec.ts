import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McArticleViewComponent } from './mc-article-view.component';

describe('McArticleViewComponent', () => {
  let component: McArticleViewComponent;
  let fixture: ComponentFixture<McArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McArticleViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
