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

  astromechs = ASTROMECHS;
}

const ASTROMECHS: Astromech[] = [
  { id: 11, name: 'R2D4' },
  { id: 12, name: 'R2D5' },
  { id: 13, name: 'R2D6' },
  { id: 14, name: 'R2D7' },
  { id: 15, name: 'R2D8' },
  { id: 16, name: 'R4D4' },
  { id: 17, name: 'R5D4' },
  { id: 18, name: 'R6D4' },
  { id: 19, name: 'R7D4' },
  { id: 20, name: 'R8D4' }
];


