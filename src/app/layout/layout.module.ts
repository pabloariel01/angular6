import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

import {legajoFilterPipe} from './legajoTextFilter';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        FormsModule,
        HttpClientModule,
        
        

    ],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent, 
        NotificacionesComponent,
        // legajoFilterPipe
    ]
})
export class LayoutModule {}
