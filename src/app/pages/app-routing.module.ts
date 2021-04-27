import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';

export const app_routes : Routes = [
    {path : 'home' , component : PortafolioComponent},
    {path: 'about' , component : AboutComponent},
    {path : 'items' , component : ItemsComponent},
    {path : '**' ,  pathMatch : 'full', redirectTo : 'home' }
];


@NgModule({
    imports : [
        RouterModule.forRoot( app_routes , { useHash : true })
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouting{}



