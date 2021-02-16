import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { NewChangeFeature } from 'src/app/_services/newChangeFeature.service';

@Component({
  selector: 'app-change-log-add',
  templateUrl: './change-log-add.component.html',
  styleUrls: ['./change-log-add.component.css']
})
export class ChangeLogAddComponent implements OnInit {
  _textValue: string | undefined;

  chng: any = {} as any;
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
  
  constructor(private newChangeFeatureService: NewChangeFeature, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createDate();
  }

  ConvertToLower(evt: any) {
    this._textValue = evt.toLowerCase();
  }

  createDate() {
    this.chng.Created = "";
  }

  add() {
    this.newChangeFeatureService.addchange(this.chng).subscribe(response => {
      this.toastr.success(this.chng.Change + ' has been added!');
    }, error => {
      console.log(error);
      if(error.error !== "Change Name already exists.") {
        this.toastr.error('Change Title or Description or Release Date cannot be blank!');
      } else {
        this.toastr.error(error.error);
      }
    })
  }
}
