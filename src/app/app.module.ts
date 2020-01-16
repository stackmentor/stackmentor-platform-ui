import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';
import { HeaderComponent } from './_layout/header/header.component';

import { AppComponent }    from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsModule }  from './settings/settings.module';
import { FooterComponent } from './_layout/footer/footer.component';
import {SharedModule} from "./_shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        FooterComponent,

    ],

    imports: [

        BrowserModule,
        DashboardModule,
        SettingsModule,
        RouterModule.forRoot([]),
        MatListModule,
        MatTableModule,
        MatCardModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
