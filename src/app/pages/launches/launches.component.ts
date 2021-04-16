import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
    private router: Router

  ) { }

  launches: any[] = [];
  loading: boolean = true;
  launchObj: any;

  goToRockets() {
    this.router.navigate(['/rockets'])
  }   

  getEvents() {
    this.spaceXService.get('launches/past').subscribe((response: any) => {
      console.log(response);
      this.launches = response;
      this.loading = false;
    });

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.getEvents();
    }, 800);
  }

}
