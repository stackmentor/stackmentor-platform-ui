import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';
import { HeaderComponent } from './_layout/header/header.component';

import { AppComponent }    from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsModule }  from './settings/settings.module';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,

    ],

    imports: [

        BrowserModule,
        DashboardModule,
        SettingsModule,

        RouterModule.forRoot([])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
