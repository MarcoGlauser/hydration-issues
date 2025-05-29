import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HydratedComponentComponent } from './hydrated-component/hydrated-component.component';

@Component({
  selector: 'app-root',
  imports: [HydratedComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender hook called');
    });
  }
}
