import { Component, OnInit } from '@angular/core';
// importuojam forma
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

// const DISHES: Dish[] = [
// {
//   id: '0',
//   name: 'Uthappizza',
//   image: '/assets/images/uthappizza.png',
//   category: 'mains',
//   featured: true,
//   label: 'Hot',
//   price: '4.99',
//   // tslint:disable-next-line:max-line-length
//   description:
//     'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
// },
// {
//   id: '1',
//   name: 'Zucchipakoda',
//   image: '/assets/images/zucchipakoda.png',
//   category: 'appetizer',
//   featured: false,
//   label: '',
//   price: '1.99',
//   description:
//     'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
// },
// {
//   id: '2',
//   name: 'Vadonut',
//   image: '/assets/images/vadonut.png',
//   category: 'appetizer',
//   featured: false,
//   label: 'New',
//   price: '1.99',
//   description:
//     'A quintessential ConFusion experience, is it a vada or is it a donut?',
// },
// {
//   id: '3',
//   name: 'ElaiCheese Cake',
//   image: '/assets/images/elaicheesecake.png',
//   category: 'dessert',
//   featured: false,
//   label: '',
//   price: '2.99',
//   description:
//     'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
// },
// ];

@Component({
  // will form the tag that we will use
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
// cia tipo implementuoja onInit tai jis reikalauja kad butu kaip part class idetas ir toks metodas
export class MenuComponent implements OnInit {
  // cia typescript yra protingas ir automatiskai priskiria reiksme is pries tai buvusios reiksmes
  // dishes = DISHES;
  // public dishes: Dish[] = DISHES;
  dishes!: Dish[];
  // [
  //   {
  //     id: '0',
  //     name: 'Uthappizza',
  //     image: '/assets/images/uthappizza.png',
  //     category: 'mains',
  //     featured: true,
  //     label: 'Hot',
  //     price: '4.99',
  //     // tslint:disable-next-line:max-line-length
  //     description:
  //       'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  //   },
  //   {
  //     id: '1',
  //     name: 'Zucchipakoda',
  //     image: '/assets/images/zucchipakoda.png',
  //     category: 'appetizer',
  //     featured: false,
  //     label: '',
  //     price: '1.99',
  //     description:
  //       'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
  //   },
  //   {
  //     id: '2',
  //     name: 'Vadonut',
  //     image: '/assets/images/vadonut.png',
  //     category: 'appetizer',
  //     featured: false,
  //     label: 'New',
  //     price: '1.99',
  //     description:
  //       'A quintessential ConFusion experience, is it a vada or is it a donut?',
  //   },
  //   {
  //     id: '3',
  //     name: 'ElaiCheese Cake',
  //     image: '/assets/images/elaicheesecake.png',
  //     category: 'dessert',
  //     featured: false,
  //     label: '',
  //     price: '2.99',
  //     description:
  //       'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
  //   },
  // ];

  // cia nurodo kad i pirmaji bus nukreipta is tu visu dishes
  // selectedDish: Dish = DISHES[0];
  selectedDish!: Dish;

  // cia sukuria single dish service Object ir jis bus mums available sitame komponente
  constructor(private dishService: DishService) {}

  // cia pasinaudojam lifecycle metodu, kai ji paskelbiame savo aplikacijoje
  // tai su situo onOnInit galima parasyti pafetchinti data, tai ivyks del to kad jis bus ivykdytas Angular framework kai sitas komponentas yra inicializuotas
  // tai galima dishes pasiimti is services
  ngOnInit(): void {
    // cia dishes service supplyins mus su data kai kompoentas bus uzkrautas
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
