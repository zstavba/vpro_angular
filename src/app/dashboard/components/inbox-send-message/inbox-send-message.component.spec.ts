import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxSendMessageComponent } from './inbox-send-message.component';

describe('InboxSendMessageComponent', () => {
  let component: InboxSendMessageComponent;
  let fixture: ComponentFixture<InboxSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxSendMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboxSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
