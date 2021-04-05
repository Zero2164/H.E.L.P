import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ChangeLogAddComponent } from './change-log/change-log-add/change-log-add.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { FeatureAddComponent } from './change-log/feature-add/feature-add.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsitesComponent } from './websites/websites.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'changes', component: ChangeLogComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'websites', component: WebsitesComponent},
  {path: 'changes/add-change', component: ChangeLogAddComponent},
  {path: 'changes/add-feature', component: FeatureAddComponent}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
}; 



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
