import { Component } from '@angular/core';

export class Astromech {
  id: number;
  name: string;
}


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Astromech';
  astromech: Astromech = {
    id: 1,
    name: 'R2D2'
  };
}


