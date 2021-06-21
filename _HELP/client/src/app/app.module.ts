import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavComponent } from './components/nav/nav.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './_modules/shared.module';
import { TasksComponent } from './components/projects/tasks/tasks.component';
import { NavLinksComponent } from './components/nav/nav-links/nav-links.component';
import { ContactComponent } from './components/contact/contact.component';
import { TaskDialogComponent } from './components/projects/task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavComponent,
    ResumeComponent,
    AboutComponent,
    TasksComponent,
    NavLinksComponent,
    ContactComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
