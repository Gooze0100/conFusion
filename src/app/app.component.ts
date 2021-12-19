// importuoja komponent class is angular core bibles
import { Component } from '@angular/core';

// cia yra kitas dekoratorius
@Component({
  // cia yra selectorius, jis browseryje atspindimas
  // bus second component perduota
  selector: 'app-root',
  // cia define view is kur turi atspindeti
  // specifies template file fir this specific file
  templateUrl: './app.component.html',
  // this is inline application, we can use variables too
  // template: `<h1>{{title}}</h1>`,
  // cia stilius koks bus taikomas komponentui
  // cia galima tureti irgi inline code
  styleUrls: ['./app.component.scss'],
})
// mes cia paruosiame class ir ja naujame paskui
// sitas komponentas gali buti exportuojamas i musu app module
export class AppComponent {
  title = 'conFusion';
}
// isirasem hammerjs jis naudojamas angular kad supportintu tam tikrus gestures
