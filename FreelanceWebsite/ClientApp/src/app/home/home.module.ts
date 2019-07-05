import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { ScrollTopComponent } from 'app/scroll-top-component/scroll-top.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule
    ],
  declarations: [ScrollTopComponent, HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
