import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { SearchModule } from '../search/search.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    SearchModule,
    MatSelectModule,
    FormsModule,
    SearchModule,
    CardModule
  ],
  exports: [CardListComponent],
})
export class CardListModule {}
