import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MatiChessWeb';

  constructor(private translate: TranslateService) {
    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang && browserLang.match(/en|pl/) ? browserLang : 'pl';
    this.translate.use(langToUse);
  }
}
