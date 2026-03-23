import {ComponentFixture, TestBed} from '@angular/core/testing';

import axe from 'axe-core';
import {Formulaire} from './formulaire';

describe('Formulaire', () => {
  let component: Formulaire;
  let fixture: ComponentFixture<Formulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('doit être instancié', () => {
    expect(component).toBeTruthy();
  });


  it('doit être accessible',async  () => {
    const fixture = TestBed.createComponent(Formulaire);
    fixture.detectChanges();

    const resultat = await axe.run(fixture.nativeElement, {
        rules: {
          'color-contrast': {enabled: false},
          'label': { enabled: true },          // Vérifie tous les labels
          'label-title-only': { enabled: true } // Détecte labels seulement visuels
        }
      });
    console.table(resultat.violations);
    expect(resultat.violations.length).toBe(0);
  });
});
