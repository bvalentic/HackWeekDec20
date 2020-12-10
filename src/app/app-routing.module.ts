import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { OutbreaksComponent } from './outbreaks/outbreaks.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game', component: GameComponent },
  { path: 'outbreaks', component: OutbreaksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
