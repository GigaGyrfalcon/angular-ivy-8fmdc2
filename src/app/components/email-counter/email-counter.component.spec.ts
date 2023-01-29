import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCounterComponent } from './email-counter.component';

describe('EmailCounterComponent', () => {
  let component: EmailCounterComponent;
  let fixture: ComponentFixture<EmailCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
