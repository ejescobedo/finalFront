import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  name: string;

  constructor() {}

  ngOnInit() {
    const value = localStorage.getItem('name');
 
  }

}
