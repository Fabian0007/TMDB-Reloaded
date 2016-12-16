import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit() {
  }
  
  /**
  * Redirect to the home
  */
  goToHome() {
    this.router.navigate(['']);
  }
  

}
