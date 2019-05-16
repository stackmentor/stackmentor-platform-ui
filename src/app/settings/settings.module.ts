import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { SharedModule }      from '../_shared/shared.module';
import { SettingsComponent } from './settings.component';

@NgModule({

    declarations: [

        SettingsComponent

    ],


    imports: [

        CommonModule,
        SharedModule,

        RouterModule.forChild([

            {

                path: 'settings',
                component: SettingsComponent

            }

        ])

    ]

})
export class SettingsModule {
}
