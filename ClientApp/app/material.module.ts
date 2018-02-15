import { NgModule } from '@angular/core';


import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatTabsModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule],
    exports: [MatTabsModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule],

})
export class MaterialModule { }