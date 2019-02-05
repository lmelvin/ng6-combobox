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
  eventLogs: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      d: this.fb.control("")
    })
  }

  get model(): any {
    return this.form.controls["d"].value;
  }

  onModelChange(value: any) {
    this.eventLogs.push(`Model Changed: ${value}`);
  }

  onTextChange(value: any) {
    this.eventLogs.push(`Text changed: ${value}`);
  }

  onSelected(value: any) {
    this.eventLogs.push(`Selection made: ${value}`);
  }
}
