import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bl-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectComponent),
    multi: true
  }]
})
export class MultiselectComponent implements ControlValueAccessor {

  @Input() value: any;

  @Input() optionLabel: string = 'label';

  @Input() optionValue: string = 'value';

  @Input() options!: any[];

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onValueChange(_: any) {}

  onValueTouch() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onValueChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onValueTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onValueUpdate(event: any) {
    this.onValueChange(event.value);
    this.onChange.emit(event);
  }

}
