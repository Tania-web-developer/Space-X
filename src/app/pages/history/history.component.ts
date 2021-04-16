import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  constructor(private spaceXService: SpaceXService
  ) { }

  history: any[] = [];
  loading: boolean = true;

  getDate(date: string) {
    return date.slice(0, 10);
  }  
  
  goTo(link:any){
    window.open(link,'_blank');
  }
  

  getEvents() {
    this.spaceXService.get('history').subscribe((response: any) => {
      console.log(response);
      this.history = response;
      this.loading = false;

    });
  }
  

  ngOnInit(): void {
    setTimeout(() => {
      this.getEvents();
    }, 800);
  }

}
