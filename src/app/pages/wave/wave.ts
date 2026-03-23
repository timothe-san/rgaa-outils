import { Component } from '@angular/core';
import {Formulaire} from '../../commun/formulaire/formulaire';

@Component({
  selector: 'app-wave',
  imports: [
    Formulaire
  ],
  templateUrl: './wave.html',
  styleUrl: './wave.css',
})
export class Wave {}
