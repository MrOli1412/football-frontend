import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule,routingComponents} from './modules/app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PlayerListComponent } from './modules/player/components/player-list/player-list.component';
import { TeamListComponent } from './modules/team/components/team-list/team-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatPaginatorModule, MatSidenavModule, MatTableModule} from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CommonModule} from '@angular/common';
import { MatchesListComponent } from './modules/match/components/matches-list/matches-list.component';
import { StatisticsComponent } from './modules/statistics/components/statistics/statistics.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './shared/components/home/menu/menu.component';
import { FooterComponent } from './shared/components/home/footer/footer.component';
import { HomeComponent } from './shared/components/home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   PageNotFoundComponent,
   PlayerListComponent,
   TeamListComponent,
   MatchesListComponent,
   StatisticsComponent,
   MenuComponent,
   FooterComponent,
   HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSidenavModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
