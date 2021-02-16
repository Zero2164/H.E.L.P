import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { NewChangeFeature } from 'src/app/_services/newChangeFeature.service';

@Component({
  selector: 'app-feature-add',
  templateUrl: './feature-add.component.html',
  styleUrls: ['./feature-add.component.css']
})
export class FeatureAddComponent implements OnInit {
  _textValue: string | undefined;
  feat: any = {} as any;
  minDate: Date;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20vh',
    minHeight: '20vh',
    maxHeight: '30vh',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['fontName'],
      ['justifyCenter', 'justifyLeft', 'justifyRight', 'justifyFull'], 
      ['insertImage', 'insertVideo'],
      ['subscript', 'superscript']
    ]
  };
  
  constructor(private newChangeFeatureService: NewChangeFeature, private toastr: ToastrService) { 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1)
  }

  ngOnInit(): void {
    this.createDate();
  }

  ConvertToLower(evt: any) {
    this._textValue = evt.toLowerCase();
  }

  createDate() {
    this.feat.FeatureDue = "";
  }

  add() {
    this.newChangeFeatureService.addfeature(this.feat).subscribe(response => {
      this.toastr.success(this.feat.Feature + ' has been added!');
    }, error => {
      console.log(error);
      if(error.error !== "Feature Name already exists.") {
        this.toastr.error('Feature Title or Description or Release Date cannot be blank!');
      } else {
        this.toastr.error(error.error);
      }
    })
  }
}
