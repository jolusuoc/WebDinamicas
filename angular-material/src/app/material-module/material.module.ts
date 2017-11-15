import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  exports: [
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
