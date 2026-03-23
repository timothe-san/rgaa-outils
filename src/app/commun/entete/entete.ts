import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-entete',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './entete.html',
  styleUrl: './entete.css',
})
export class Entete implements OnInit{

  isOpen = false;
  isDark = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Fermer avec Escape (accessibilité clavier)
  @HostListener('document:keydown.escape')
  onEscape() {
    this.isOpen = false;
  }


  ngOnInit() {
    // Initialise le thème selon la préférence utilisateur stockée ou la préférence système
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.enableDark();
    } else {
      this.disableDark();
    }
  }

  toggleTheme() {
    this.isDark ? this.disableDark() : this.enableDark();
  }

  enableDark() {
    document.documentElement.classList.add('dark');
    this.isDark = true;
    localStorage.setItem('theme', 'dark');
  }

  disableDark() {
    document.documentElement.classList.remove('dark');
    this.isDark = false;
    localStorage.setItem('theme', 'light');
  }
}
