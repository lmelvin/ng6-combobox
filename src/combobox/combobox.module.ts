import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng6ComboBoxComponent } from './combobox.component';

@NgModule({
  declarations: [Ng6ComboBoxComponent],
  exports: [Ng6ComboBoxComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [Ng6ComboBoxComponent]
})
export class Ng6DatepickerModule { }
