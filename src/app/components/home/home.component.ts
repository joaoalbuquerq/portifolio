import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home', //Como vou referenciar esse componente em outro componente (tag html em outro arquivo)
  standalone: true, //Indica que o componente é sozinho, sem pertencer a nenhum outro módulo
  imports: [HeaderComponent], //Outros compoentnes do angular 
  templateUrl: './home.component.html', //Html estático deste componente
  styleUrl: './home.component.scss' //Arquivo CSS de estilo deste componente
})
export class HomeComponent {

}
