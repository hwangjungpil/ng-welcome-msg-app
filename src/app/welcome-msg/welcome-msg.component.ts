import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css'],

})
export class WelcomeMsgComponent implements AfterViewInit  {

  constructor(public i18nSupporter : I18nSupportService, private snackbar: MatSnackBar) { }

  userName="";
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;
  welcomeMsg="";

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      this.snackbar.open('이름을 입력해 주세요.', '확인', {duration: 30000});
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name:string) {
    this.valid = name.length > 0;
  }
  
  setName(name:string) {
    this.userName = name;
  };

  onChange() {
    this.valid= this.userName.length > 0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }
}
