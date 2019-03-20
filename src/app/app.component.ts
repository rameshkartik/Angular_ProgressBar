import { Component } from '@angular/core';
import { PageInfo } from './models/progressbar.model';
import { PageState } from './states/progressbar.state'
import * as ProgressbarActions from './actions/progressbar.actions'
import { Store } from '@ngrx/store'
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { debug, debuglog } from 'util';
import { store } from '@angular/core/src/render3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent1 {
//   title = 'ProgresswsBar';
// }

export class AppComponent implements OnInit{

  pages:Observable<any>;
  title = 'ProgressBar';
  addrss = 2;
  constructor(private store: Store<PageState>) {
  }

  addPage(pagename: any,address: any,pagecount: any){
      this.store.dispatch(new ProgressbarActions.AddPage(
          {pageName : pagename, Address : address,PageCount :pagecount}
      ))
      this.store.dispatch(new ProgressbarActions.AddPage(
        {pageName : 'DriverUpdate_License', Address : 3,PageCount:pagecount}
    ))
      //this.pages = this.store.select<any>('PageInfo');
      
  }
  
  getPage(pagename:any){
    this.store.dispatch(new ProgressbarActions.GetPage(
          {pageName : "DriverUpdate_DOB", Address : 2,PageCount : 4}
      ))
      this.pages = this.store.select<any>('PageInfo');
  }

  ngOnInit() {

  }
}