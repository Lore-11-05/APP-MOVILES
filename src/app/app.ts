import { Component } from '@angular/core';
import { HomePage } from './pages/home/home.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'previoionic';
}