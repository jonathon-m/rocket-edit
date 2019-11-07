import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { PasswordConfig } from '../../configuration/config';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'password-editor',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit, DoCheck, OnDestroy {

  value: any;
  subscription: any;
  config: PasswordConfig;

  constructor(private interact: EditorService) { }

  ngOnInit() {
    this.config = this.interact.getConfig();
    this.subscription = this.interact.getData().subscribe(x => {
      this.value = x;
    });
  }

  ngDoCheck() {
    this.interact.postData(this.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
