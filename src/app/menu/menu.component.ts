import { Component, OnInit } from '@angular/core';
// importuojam forma
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

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
export class MenuComponent implements OnInit {
  // cia typescript yra protingas ir automatiskai priskiria reiksme is pries tai buvusios reiksmes
  // dishes = DISHES;
  public dishes: Dish[] = DISHES;
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
  public selectedDish!: Dish;

  constructor() {}

  ngOnInit(): void {}

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
