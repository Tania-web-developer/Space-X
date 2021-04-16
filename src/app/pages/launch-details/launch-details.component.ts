import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  launch: any;
  loading: boolean = true;
  launches: any;
  images: any;
  

  getTime(time: string) {
    return time.slice(11, 16);
  }
  getDate(date: string) {
    return date.slice(0, 10);
  }  
  goBack() {
    this.router.navigate(['/launches'])
  }   
  goTo(link:any){
    window.open(link,'_blank');
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      const { id } = params;
      console.log(id);
      this.spaceXService.get(`launches/${id}`).subscribe((response: any) => {
        console.log(response);
        this.launch = response;
        this.loading = false;
      });
    });
  }
}
