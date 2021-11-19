import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { TemplateComponent } from './template/template.component';
import { SignupComponent } from './signup/signup.component';
import { SampletempComponent } from './sampletemp/sampletemp.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    SignupComponent,
    SampletempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
