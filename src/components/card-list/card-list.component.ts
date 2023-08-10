import { Component, OnInit } from '@angular/core';

type FilterModel = {
  name: string;
  value: number | string;
};

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public filters: FilterModel[] = [
    {
      name: 'All',
      value: '0',
    },
    {
      name: 'Filter 1',
      value: 1,
    },
    {
      name: 'Filter 2',
      value: 2,
    },
  ];
  public selectedFilter: FilterModel['value'];

  public cardItems: Array<{
    id: string | number;
    heading: string;
    desc: string;
    imgSrc: string;
  }> = []

  constructor() {
    this.selectedFilter = this.filters[0].value;
  }

  ngOnInit(): void {
    // dummy logic to reproduce screen
    this.cardItems = Array.from({ length: 12 }, (item, index) => index) as any;
  }

  public searchCardItems(searchTerm: string): void {
    // execute search logic
  }
}
