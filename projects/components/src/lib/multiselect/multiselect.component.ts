import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bl-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

  @Input() value!: any[];

  @Input() optionLabel: string = 'label';

  @Input() options!: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
