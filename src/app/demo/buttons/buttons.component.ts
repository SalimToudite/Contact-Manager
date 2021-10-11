import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>Click me!</button>

<button mat-icon-button >
  <mat-icon>more_vert</mat-icon>
</button>

<div class="example-button-container">
  <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
    <mat-icon>menu</mat-icon>
  </button>
</div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
