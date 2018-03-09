import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatCheckboxModule
    ],
    exports: [CommonModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatCheckboxModule],
  declarations: []
})
export class AppMaterialModule { }
