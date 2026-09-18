import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  botaoDesabilitado:boolean = true;
  login:string='';
  senha:string='';
 
  validarFormulario(){
    if(this.login.trim()!="" && this.senha.trim() != "" ) {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
   
  }
 
  fazerLogin(){
 
  }
 
  onBotaoClicado(){
    alert("Botão clicado");
  }
 
  teclaDigitada(evento:KeyboardEvent):void{
    alert("Usuário digitou: "+evento.key);
  }
 
}
 



