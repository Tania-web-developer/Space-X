import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HistoryComponent } from './pages/history/history.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { AboutComponent } from './pages/about/about.component';
import { LaunchDetailsComponent } from './pages/launch-details/launch-details.component';
import { RocketDetailsComponent } from './pages/rocket-details/rocket-details.component';


const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
  },
  {
    path: 'launches',
    component: LaunchesComponent,
  },
  {
    path: 'rockets',
    component: RocketsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },  
  {
    path: 'launches/:id',
    component:  LaunchDetailsComponent,
  }, 
  {
    path: 'rockets/:id',
    component:  RocketDetailsComponent,
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
