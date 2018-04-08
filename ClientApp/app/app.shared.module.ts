import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorStateMatcherCoreModule } from './error-state-matcher-core/error-state-matcher-core.module';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';  
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

import { VehicleService } from './services/vehicle.service';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AppErrorHandler } from './app.error-handler';





@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent,
        VehicleListComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ToastyModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'vehicles/new', component: VehicleFormComponent },
            { path: 'vehicles/:id', component: VehicleFormComponent },
            { path: 'vehicles', component: VehicleListComponent},
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
           
        ])
    ],
    providers: [
        VehicleService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ]
})
export class AppModuleShared {
}
