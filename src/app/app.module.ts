import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyfirstserviceService } from './myfirstservice.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

import { SortPipe } from './app.sortpipe';
import { BaseconverterComponent } from './baseconverter/baseconverter.component';
import { FormvalidationsComponent } from './formvalidations/formvalidations.component';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    BaseconverterComponent,
    FormvalidationsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {
    path:'member',
    component:MembersComponent
    },
    {
    path:'product',
    component:ProductComponent
    }
    ])
  ],
  providers: [MyfirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
