// importuoja komponent class is angular core bibles
import { Component } from '@angular/core';

// cia yra kitas dekoratorius
@Component({
  // cia yra selectorius, jis browseryje atspindimas
  selector: 'app-root',
  // cia define view is kur turi atspindeti
  templateUrl: './app.component.html',
  // cia stilius koks bus taikomas komponentui
  styleUrls: ['./app.component.scss'],
})
// mes cia paruosiame class ir ja naujame paskui
export class AppComponent {
  title = 'conFusion';
}
// isirasem hammerjs jis naudojamas angular kad supportintu tam tikrus gestures
