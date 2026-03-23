import {AfterViewInit, Component, ElementRef, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Entete} from './commun/entete/entete';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('rgaa-outils');
  pageAnnouncement = 'Page chargée';


  constructor(private readonly router: Router, private readonly elementRef: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const main = this.elementRef.nativeElement.querySelector<HTMLElement>('#main-content');
      const heading = this.elementRef.nativeElement.querySelector<HTMLElement>('main h1');

      if (heading) {
        heading.focus();
        this.pageAnnouncement = `Page chargée : ${heading.textContent?.trim() ?? ''}`;
      } else if (main) {
        main.focus();
        this.pageAnnouncement = 'Page chargée';
      }
    });

  }
}
