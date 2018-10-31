import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  TAB_KEY = 9,
  ENTER_KEY = 13
};

@Component({
  selector: "ng6-combo-box",
  templateUrl: "./combobox.component.html",
  styleUrls: ["./combobox.component.scss"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Ng6ComboBoxComponent,
    multi: true
  }]
})
export class Ng6ComboBoxComponent implements ControlValueAccessor {

  @Input("data") dataList: Object[];
  @Input() propertyName: string;
  @Input() buttonClass: string;

  onChange = (_: any) => { };
  onTouched = () => { };
  value: any;
  showDropDown: boolean;
  selectedIndex: number = -1;

  // ControlValueAccessor implementation
  writeValue(val: any): void {
    this.value = val || "";
  }
  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { }

  // member methods
  setValue(val: any): void {
    this.writeValue(val);
    this.onChange(val);
  }

  toggleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }

  checkHighlight(index: number): boolean {
    if (this.selectedIndex === index) return true;
    return false;
  }

  valueSelected(val: any, index: number) {
    this.selectedIndex = index;
    this.setValue(val);
    this.showDropDown = false;
  }

  onTextChange(val: any): void {
    this.selectedIndex = -1;
    this.showDropDown = true;
    this.setValue(val);
  }

  onBlur() {
    this.showDropDown = false;
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.selectedIndex = this.selectedIndex === this.dataList.length - 1 ? this.selectedIndex : ++this.selectedIndex;
      this.setValue(this.dataList[this.selectedIndex][this.propertyName.toString()]);
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.selectedIndex = this.selectedIndex === 0 ? this.selectedIndex : --this.selectedIndex;
      this.setValue(this.dataList[this.selectedIndex][this.propertyName.toString()]);
    }

    if (event.keyCode == KEY_CODE.ENTER_KEY) {
      this.showDropDown = false;
    }
  }
}
