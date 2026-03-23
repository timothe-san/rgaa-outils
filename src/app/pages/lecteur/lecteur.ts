import { Component } from '@angular/core';
import {Formulaire} from '../../commun/formulaire/formulaire';

@Component({
  selector: 'app-lecteur',
  imports: [
    Formulaire
  ],
  templateUrl: './lecteur.html',
  styleUrl: './lecteur.css',
})
export class Lecteur {
  title = 'RGAA Outils - Lecteur';
}
