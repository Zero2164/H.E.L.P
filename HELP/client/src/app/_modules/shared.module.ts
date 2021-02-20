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
    })
  ],
  exports: [
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    CarouselModule,
    FontAwesomeModule,
    AngularEditorModule,
    NgxScrollTopModule,
    ToastrModule
  ]
})
export class SharedModule { }
