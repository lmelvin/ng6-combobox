# Ng6Combobox

A simple combobox component built for Angular 6 reactive forms and Bootstrap 4

`npm install ng6-combobox`

#### Selector
`ng6-combo-box`

#### Inputs

| Attribute      | Type          | Description                                                                  |
| -------------- | ------------- | ---------------------------------------------------------------------------- |
| `data`         | Object[]      | The data list of pre-defined options                                         |
| `propertyName` | string        | The name of the property in the `data` array used to display in the dropdown |
| `buttonClass`  | string        | The class to use for the button group (ex. 'fa fa-angle-down')               |

#### Outputs

| Attribute      | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `selectItem`   | Fires when an item is selected by mouse click. The payload is the value of the item selected        |
| `textChange`   | Fires when text is manually entered by keystroke. The payload is the value of the text in the input |

```html
<ng6-combo-box [data]="dataList"
               [propertyName]="'name'"
               formControlName="formControl"
               (selectItem)="onSelected($event)"
               (textChange)="onTextChange($event)"></ng6-combo-box>
```
