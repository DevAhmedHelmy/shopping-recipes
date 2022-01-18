import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-app';
  showPageContent: string = 'shopping-list';

  onFeatureSelected(event: string) {
    this.showPageContent = event;
  }
}
