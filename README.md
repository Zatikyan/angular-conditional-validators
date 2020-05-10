# angular-conditional-validators

This Angular module generated using **@angular/cli** version 8.2.14.
This module provides validators with **and** & **or** conditions.  

## How it works

Both **and** & **or** validators works in the similiar way: thay will check validity by provided validators one by one - from the first one to the last one.

## Installation

Copy the following command to your command line or terminal to install the package.

```bash
npm install --save angular-conditional-validators
```

## Usage

Typescript code of the usage.  

```typescript
import { Component } from '@angular/core';
import { FormControl } frm '@angular/forms';
import { ConditionalValidators } from 'angular-conditional-validators';

@Component({
  ...
})
export class AppComponent {

    controlOne = new FormControl('',
        ConditionalValidators.and([
            // Your validators
        ])
    );

    controlTwo = new FormControl('',
        ConditionalValidators.or([
            // Your validators
        ])
    );
}
```

HTML code of the usage.

```html

<div>
    <label for="controlOne"></label>
    <input name="controlOne" type="text" [formControl]="controlOne">
    <div *ngIf="controlOne.errors?.andCondition">
        <!-- Your error message -->
    </div>
</div>

<div>
    <label for="controlTwo"></label>
    <input name="controlTwo" type="text" [formControl]="controlTwo">
    <div *ngIf="controlTwo.errors?.orCondition">
        <!-- Your error message -->
    </div>
</div>

```

### You can specify your own error key - value pear as well.

```typescript

formControl = new FormControl('',
    ConditionalValidators.or([
        // Your validators
    ], { errorMessageKey: 'Error message value' }))

```

```html
<div>
    <label for="formControl"></label>
    <input name="formControl" type="text" [formControl]="formControl">
    <div *ngIf="formControl.errors?.errorMessageKey">
        <p>{{ formControl.errors.errorMessageKey }}</p>
    </div>
</div>
```


## License
### [MIT](https://github.com/Zatikyan/angular-conditional-validators/blob/master/LICENSE)