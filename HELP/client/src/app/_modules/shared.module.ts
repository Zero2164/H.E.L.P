import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularEditorModule,
    NgxScrollTopModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      progressBar: true,
      timeOut: 1000,
    }),
    AlertModule.forRoot()
  ],
  exports: [
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    CarouselModule,
    FontAwesomeModule,
    AngularEditorModule,
    NgxScrollTopModule,
    ToastrModule,
    AlertModule
  ]
})
export class SharedModule { }
