import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { TextComponent } from './editor/components/text/text.component';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './editor/components/number/number.component';
import { TimeComponent } from './editor/components/time/time.component';
import { SelectComponent } from './editor/components/select/select.component';
import { PasswordComponent } from './editor/components/password/password.component';

@NgModule({
  declarations: [EditorComponent, TextComponent, PasswordComponent, NumberComponent, TimeComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EditorComponent]
})
export class RocketEditModule { }
