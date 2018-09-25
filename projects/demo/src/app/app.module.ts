import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { Ng6Module } from 'ng6-combobox';

import { AppComponent } from './app.component';
import { ComboBoxComponent } from './components/combobox/combobox.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComboBoxComponent
  ],
  imports: [
    BrowserModule,
    Ng6Module,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'combobox', component: ComboBoxComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class DemoModule {
}
