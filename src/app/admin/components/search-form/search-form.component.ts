import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() searchForm!: FormGroup

  @Output() onSearchEvent = new EventEmitter();

  onSearch(){
    this.onSearchEvent.emit();
  }
}