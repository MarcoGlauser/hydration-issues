import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydrated-component',
  imports: [],
  templateUrl: './hydrated-component.component.html',
  styleUrl: './hydrated-component.component.css',
})
export class HydratedComponentComponent {
  platformId = inject(PLATFORM_ID);

  constructor() {
    if (this.platformId === 'browser') {
      setTimeout(() => {
        console.log('hydration delayed by 11 seconds');
      }, 11000);
    }
  }
}
