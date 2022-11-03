
import { Component, Input, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedItems } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListItems } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  items$: Observable<any> = new Observable()


  constructor(private store: Store<AppState>) {


  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectListItems)
    // this.showCase.getDataApi()
    //   .subscribe((res) => {
    //     this.listData = res
    //   })
  }


}
