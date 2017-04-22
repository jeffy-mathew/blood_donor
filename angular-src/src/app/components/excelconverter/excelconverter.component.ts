import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-excelconverter',
  templateUrl: './excelconverter.component.html',
  styleUrls: ['./excelconverter.component.css'],
  providers: [LoginService]
})
export class ExcelconverterComponent implements OnInit {
  user: Object;
  responseObject: any;
  uploadCount: boolean;
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/upload', authToken: localStorage.getItem('id_token') });
  constructor(private loginService: LoginService, private router: Router, private flashMessage: FlashMessagesService, ) { }

  ngOnInit() {
    this.uploadCount = true;
    this.loginService.getExcelconverter().subscribe(adminDetails => {
      this.user = adminDetails.user;
    },
      err => {
        console.log(err);
        return false;
      });

  }
  onChange(event) {
    if (this.uploader.queue.length > 4) {
      this.uploadCount = false;
    }
  }

  uploadFile() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.responseObject = JSON.parse(response);
      if (this.responseObject.error_code == 1) {
        console.log(item);
        this.flashMessage.show(this.responseObject.err_desc +" "+ item._file.name, { cssClass: 'alert-danger', timeout: 8000 });
      }
      if (this.responseObject.error_code == 0) {
        this.flashMessage.show("Succesfull upload of " + item._file.name, { cssClass: 'alert-success', timeout: 8000 });
      }
    }
  }

}