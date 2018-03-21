import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
      MatIconModule,
      MatGridListModule,
      MatMenuModule,
      MatCardModule,
      MatSnackBarModule
    ],
    exports: [CommonModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatIconModule,
        MatGridListModule,
        MatMenuModule,
        MatCardModule,
        MatSnackBarModule
    ],
  declarations: []
})
export class AppMaterialModule { }
