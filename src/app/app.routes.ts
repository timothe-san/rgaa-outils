import { Routes } from '@angular/router';
import { Lecteur } from './pages/lecteur/lecteur';
import {Wave} from './pages/wave/wave';
import {Sources} from './pages/sources/sources';
import {Axecore} from './pages/axecore/axecore';
import {Ia} from './pages/ia/ia';
import {Accueil} from './pages/accueil/accueil';

export const routes: Routes = [

  { path: 'lecteur', component: Lecteur , title: 'RGAA Outils - Lecteur'},
  { path: 'wave', component: Wave , title: 'RGAA Outils - Wave'},
  { path: 'sources', component: Sources , title: 'RGAA Outils - Sources'},
  { path: 'axe-core', component: Axecore , title: 'RGAA Outils - Axe-core'},
  { path: 'ia', component: Ia , title: 'RGAA Outils - IA'},
  { path: '', component:Accueil, pathMatch: 'full', title: 'RGAA Outils - Accueil' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
