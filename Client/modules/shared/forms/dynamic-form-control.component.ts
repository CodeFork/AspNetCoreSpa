import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlBase }     from './control-base';
import { ErrorMessageComponent }     from './error-message.component';

@Component({
    selector: 'appc-dynamic-control',
    templateUrl: './dynamic-form-control.component.html'
})
export class DynamicFormControlComponent {
    @Input() control: ControlBase<string>;
    @Input() form: FormGroup;

    constructor() {
        this.control = undefined;
        this.form = undefined;
    }

    get valid() {
        return this.form.controls[this.control.key].valid;
    }

    get invalid() {
        return !this.form.controls[this.control.key].valid && this.form.controls[this.control.key].touched;
    }
}
