import { Component } from '@angular/core';
import {LABELS} from '../labels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'random';
  public tabs = LABELS.TABS;
}
