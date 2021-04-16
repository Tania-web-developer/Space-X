import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
    private router: Router


  ) { }

  rockets: any[] = [];
  loading: boolean = true;

  getLaunches() {
    this.spaceXService.get('rockets').subscribe((response: any) => {
      console.log(response);
      this.rockets = response;
      this.loading = false;

    });
  }

  goToLaunches() {
    this.router.navigate(['/launches'])
  }   

  ngOnInit(): void {
    setTimeout(() => {
      this.getLaunches();
    }, 800);
  }



}
