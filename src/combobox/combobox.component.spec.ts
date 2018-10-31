import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Ng6ComboBoxComponent } from './combobox.component';

describe("Ng6ComboBoxComponent DOM", () => {
  let component: Ng6ComboBoxComponent;
  let fixture: ComponentFixture<Ng6ComboBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng6ComboBoxComponent]
    });
    fixture = TestBed.createComponent(Ng6ComboBoxComponent);
    component = fixture.componentInstance;
  });

  it("should not create the dropdown element by default", () => {
    const compiled = fixture.debugElement.nativeElement;
    var input = compiled.querySelector("div.data-container") as HTMLElement;
    expect(input).toBeNull();
  });

  it("should create/remove the dropdown element when calling #toggleDropDown()", () => {
    // toggle show
    component.toggleDropDown();
    fixture.detectChanges();

    var compiled = fixture.debugElement.nativeElement;
    var input = compiled.querySelector("div.data-container") as HTMLElement;
    expect(input).toBeDefined();

    // toggle hide
    component.toggleDropDown();
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    input = compiled.querySelector("div.data-container") as HTMLElement;
    expect(input).toBeNull();
  });

  it("should set the input element's value on #setValue()", () => {
    component.setValue("foo");
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    var input = compiled.querySelector("input.form-control") as HTMLInputElement;
    expect(input.value).toContain('foo');
  });
});


describe('Ng6ComboBoxComponent', () => {
  let component: Ng6ComboBoxComponent;
  let fixture: ComponentFixture<Ng6ComboBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng6ComboBoxComponent]
    });
    fixture = TestBed.createComponent(Ng6ComboBoxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('#setValue() should set #value',
    async(() => {
      const val = "foo";
      component.setValue(val);
      expect(component.value).toBe(val);
    }));

  it('dropdown should be hidden by default',
    async(() => {
      expect(component.showDropDown).toBeFalsy();
    }));

  it('#toggle() should change dropdown visibility state',
    async(() => {
      component.toggleDropDown();
      expect(component.showDropDown).toBeTruthy();

      component.toggleDropDown();
      expect(component.showDropDown).toBeFalsy();
    }));

  it('#valueSelected() should hide dropdown and set #value',
    async(() => {
      const val = "foo";
      component.valueSelected(val, 1);
      expect(component.showDropDown).toBeFalsy();
      expect(component.value).toBe(val);
    }));

  it('#onTextChange() should show dropdown and set #value',
    async(() => {
      const val = "foo";
      component.onTextChange(val);
      expect(component.showDropDown).toBeTruthy();
      expect(component.value).toBe(val);
    }));

  it('#onBlur() should hide dropdown',
    async(() => {
      component.onBlur();
      expect(component.showDropDown).toBeFalsy();
    }));
})
