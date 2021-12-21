import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// musu root component
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

@NgModule({
  // cia deklrajuoja view class tai cia aprasomos directive, pipes ir components
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  // cia eina importai, nuo kuriu bus priklausoma musu aplikacija, kai importuojam jas reikia cia reikia jas aprasyti nuo ko bus dependant
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  // providers specified visus servisus kuriuos sitas konkreciai komponentas naudosis
  // cia tipo jei norime kad visi komponentai matytu tai galime cai paskelbti service ir tada visi matys
  // Angular cia naudoja dependency injection ir sukuria ta service paziurejes
  providers: [DishService],
  // jei norime pamatyti tipo cia atspindi sitame index.html faile per musu main.ts atvaizduoja kas yra tame app component
  bootstrap: [AppComponent],
})
export class AppModule {}
