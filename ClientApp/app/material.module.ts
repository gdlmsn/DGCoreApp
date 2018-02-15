import { NgModule } from '@angular/core';


import { MatButtonModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatSlideToggleModule],
    exports: [MatButtonModule,MatSlideToggleModule],

})
export class MaterialModule { }