import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // cia exportuojam kad app module galetu matyti routes ir tuo pasinaudoti
  exports: [RouterModule],
})
export class AppRoutingModule {}
