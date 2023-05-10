import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  authService: any;
  constructor(private router: Router) {
    
   }
   newAccount(): void {
      this.router.navigate(["/#/signup"]);
  }

}
