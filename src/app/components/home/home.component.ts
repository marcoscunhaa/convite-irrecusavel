import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  textoCompleto: string = "Só você e eu, no seu restaurante favorito, tomando aquele gin, beijando devagarinho e ver quem resiste mais. Bora? 😈🔥";
  textoDigitando: string = "";
  index: number = 0;
  naoTop = 0;
  naoLeft = 0;
  isBotaoFugindo = false;

  ngOnInit(): void {
    this.digitarTexto();
  }

  digitarTexto() {
    if (this.index < this.textoCompleto.length) {
      this.textoDigitando += this.textoCompleto.charAt(this.index);
      this.index++;
      setTimeout(() => this.digitarTexto(), 40);
    }
  }

  mostrarBalao = false;
  mostrarBeijo = false;

  mostrarOcultarBalao() {
  if (this.mostrarBeijo == false) {
    setTimeout(() => {
      this.mostrarBalao = true;
    }, 2000);
  } else {
    this.mostrarBalao = !this.mostrarBalao;
  }
  this.mostrarBeijo = !this.mostrarBeijo;
}

  mostrarAlerta = false;

  fecharAlerta() {
    this.mostrarAlerta = false;
  }

  aceitarConvite() {
    const numero = '5588997475684';
    const mensagem = encodeURIComponent('A gente vai pro Chinaider gato 😈🔥');

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }

  ativarFuga() {
    this.isBotaoFugindo = true;
    this.moverBotao();
  }

 moverBotao() {
  const maxTop = 100;     // até 100px pra baixo
  const minLeft = -80;    // até 80px pra esquerda
  const maxLeft = 80;     // até 80px pra direita

  this.naoTop = Math.floor(Math.random() * maxTop); // entre 0 e 100px
  this.naoLeft = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft; // entre -80 e 80px
}



}
