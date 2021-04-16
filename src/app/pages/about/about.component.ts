import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
  ) { }

  companyInfo: any;
  loading: boolean = true;
  
  goTo(link:any){
    window.open(link,'_blank');
  }
  

  getCompanyInfo(){
    this.spaceXService.get('company', 'v4').subscribe((response: any)=>{
      this.companyInfo = response;
      this.loading = false;     
      console.log(this.companyInfo);
      
       
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCompanyInfo();      
    }, 800);
  }

}
