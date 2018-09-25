import { NgModule, ModuleWithProviders } from '@angular/core';

import { Ng6DatepickerModule } from './combobox/combobox.module';

const NGB_MODULES = [
  Ng6DatepickerModule
];

@NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
export class Ng6Module { }
