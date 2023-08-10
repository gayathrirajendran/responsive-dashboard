import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>(); 
  @Input() placeholderText: string = 'Search...';
  
  constructor() { }

  ngOnInit(): void {
  }

}
