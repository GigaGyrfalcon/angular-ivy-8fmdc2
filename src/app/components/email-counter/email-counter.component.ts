import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-email-counter',
  templateUrl: './email-counter.component.html',
  styleUrls: ['./email-counter.component.css'],
})
export class EmailCounterComponent {
  period = 300;
  emailCount = 0;
  intervalRef: Subscription;
  isIntervalRunning = false;

  startInterval() {
    this.isIntervalRunning = true;
    this.intervalRef = interval(this.period).subscribe(() => {
      this.emailCount++;
    });
  }

  stopInterval() {
    this.intervalRef.unsubscribe();
    this.isIntervalRunning = false;
  }

  resetInterval() {
    this.stopInterval()
    this.emailCount = 0;
  }

  ngOnDestroy() {
    this.stopInterval();
  }
}
