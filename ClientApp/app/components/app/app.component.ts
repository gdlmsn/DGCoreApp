import { Component } from '@angular/core';

import './app.component.scss';
import '../style/dgcoreapp-theme.scss';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    isDarkTheme: boolean = false;

    changeTheme(): void {
        if (this.isDarkTheme) {
            this.isDarkTheme = false
        } else {
            this.isDarkTheme = true;
        }
    }
}




