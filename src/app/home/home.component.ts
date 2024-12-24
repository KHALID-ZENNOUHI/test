import { Component, signal } from '@angular/core';
import { GreatingComponent } from '../components/greating/greating.component';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreatingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeTitle = signal('Greating from HomeComponent');
}
