import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { SelectConfig } from '../../configuration/config';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'select-editor',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnDestroy {

  value: any;
  subscription: any;
  config: SelectConfig;

  constructor(private interact: EditorService) { }

  ngOnInit() {
    this.config = this.interact.getConfig();
    this.subscription = this.interact.getData().subscribe(x => {
      this.value = x;
    });
  }

  updateValue(value) {
    this.interact.postData(this.value);
  }

  // ngDoCheck() {
  //   this.interact.postData(this.value);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}