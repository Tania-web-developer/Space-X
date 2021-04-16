import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

  }

  @Input() menu: any;

  goHome() {
    this.router.navigate(['/'])
  }   

  ngOnInit(): void {
  }

}
