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

```html
<ng6-combo-box [data]="dataList"
               [propertyName]="'name'"
               formControlName="formControl"></ng6-combo-box>
```
