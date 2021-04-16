import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  rocket: any;
  loading: boolean = true;

  goBack() {
    this.router.navigate(['/rockets'])
  }
  goTo(link: any) {
    window.open(link, '_blank');
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      const { id } = params;
      console.log(id);
      this.spaceXService.get(`rockets/${id}`).subscribe((response: any) => {
        console.log(response);
        this.rocket = response;
        this.loading = false;

      });

    });

  }

}
