import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule,routingComponents} from './modules/app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PlayerListComponent } from './modules/player/components/player-list/player-list.component';
import { TeamListComponent } from './modules/team/components/team-list/team-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DATE_LOCALE,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CommonModule} from '@angular/common';
import { MatchesListComponent } from './modules/match/components/matches-list/matches-list.component';
import { StatisticsComponent } from './modules/statistics/components/statistics/statistics.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './shared/components/home/menu/menu.component';
import { FooterComponent } from './shared/components/home/footer/footer.component';
import { HomeComponent } from './shared/components/home/home/home.component';
import { PlayerDetailComponent } from './modules/player/components/player-detail/player-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UploadPlayersComponent } from './modules/player/components/upload-players/upload-players.component';


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
   PlayerDetailComponent,
   UploadPlayersComponent,
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
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,

  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA,useValue: {}},
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
  ],
  entryComponents:[PlayerDetailComponent,UploadPlayersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
