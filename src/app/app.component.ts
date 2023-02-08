import { Component } from '@angular/core';
import {OrderDetails} from './data';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import { getFormatFromType } from '@syncfusion/ej2-angular-spreadsheet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public data:object = new DataManager({
    url:"https://ej2services.syncfusion.com/production/web-services/api/Orders",
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  })
  public boldCenter={ fontWeight:'bold', textAlign:'center'}
  public currencyFormat: string = getFormatFromType('Currency');

  public btnClick(){
    this.data = OrderDetails;
  }
}
