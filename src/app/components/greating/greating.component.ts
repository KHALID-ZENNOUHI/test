import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greating',
  standalone: true,
  imports: [],
  templateUrl: './greating.component.html',
  styleUrl: './greating.component.scss'
})
export class GreatingComponent {
  message = input('Default message');
}
