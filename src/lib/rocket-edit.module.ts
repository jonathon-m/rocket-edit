import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './editor/components/text/text.component';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './editor/components/number/number.component';
import { TimeComponent } from './editor/components/time/time.component';
import { SelectComponent } from './editor/components/select/select.component';
import { RocketEditComponent } from './rocket-edit.component';

@NgModule({
  declarations: [RocketEditComponent, TextComponent, NumberComponent, TimeComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RocketEditComponent]
})
export class RocketEditModule { }
