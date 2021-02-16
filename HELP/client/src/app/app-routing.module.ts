import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeLogAddComponent } from './change-log/change-log-add/change-log-add.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { FeatureAddComponent } from './change-log/feature-add/feature-add.component';


const routes: Routes = [
  {path: 'changes', component: ChangeLogComponent},
  {path: 'changes/add-change', component: ChangeLogAddComponent},
  {path: 'changes/add-feature', component: FeatureAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
