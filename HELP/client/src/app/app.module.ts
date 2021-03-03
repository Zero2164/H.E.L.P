import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './_modules/shared.module';
import { ChangeLogComponent } from './change-log/change-log.component';
import { FormsModule } from '@angular/forms';
import { ChangeLogAddComponent } from './change-log/change-log-add/change-log-add.component';
import { ChangeLogCardComponent } from './change-log/change-log-card/change-log-card.component';
import { FeatureAddComponent } from './change-log/feature-add/feature-add.component';
import { FeatureCardComponent } from './change-log/feature-card/feature-card.component';
import { WebsitesComponent } from './websites/websites.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChangeLogComponent,
    ChangeLogAddComponent,
    ChangeLogCardComponent,
    FeatureAddComponent,
    FeatureCardComponent,
    WebsitesComponent,
    ProjectsComponent,
    AboutMeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
