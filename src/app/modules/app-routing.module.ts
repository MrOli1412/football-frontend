import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TeamListComponent} from './team/components/team-list/team-list.component';
import {PlayerListComponent} from './player/components/player-list/player-list.component';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {AppComponent} from '../app.component';
import {MatchesListComponent} from './match/components/matches-list/matches-list.component';
import {StatisticsComponent} from './statistics/components/statistics/statistics.component';
import {HomeComponent} from '../shared/components/home/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'team/:id',
    component: TeamListComponent,
    children:[
      {path:'players',component:PlayerListComponent},
      {path:'matches',component:MatchesListComponent},
      {path:'statistics',component:StatisticsComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [AppComponent, TeamListComponent, PlayerListComponent, PageNotFoundComponent, MatchesListComponent,StatisticsComponent];
