import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

itensmenu = [
  {label: 'Inicio', link:''},
  {label: 'Clientes', link:'/clientes'},
  {label: 'Sobre', link:'sobre'},

]


}
 
