import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from './shared/shared.module';
const config: SocketIoConfig = { url: 'http://localhost:9000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
