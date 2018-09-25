import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@
  Component({
    selector: 'combobox',
    templateUrl: './combobox.component.html'
  })
export class ComboBoxComponent implements OnInit {
  templateFormModel = "";
  form: FormGroup;
  dataList = [
    { name: "John" }, { name: "Sally" }, { name: "Frank" }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      d: this.fb.control("")
    })
  }

  get model(): any {
    return this.form.controls["d"].value;
  }
}
