import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  mostrarLoading = true;
  textoCompleto: string = "Só você e eu, no seu restaurante favorito, tomando aquele gin, beijar devagarinho e ver quem resiste mais. Bora?😈🔥";
  textoDigitando: string = "";
  index: number = 0;
  naoTop = 0;
  naoLeft = 0;
  isBotaoFugindo = false;

  ngOnInit(): void {
    this.digitarTexto(),
      setTimeout(() => {
        this.mostrarLoading = false;
      }, 2000);
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
    const mensagem = encodeURIComponent('A gente vai pro Chinaider gato! 💞');

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }

  ativarFuga() {
    this.isBotaoFugindo = true;
    this.moverBotao();
  }

  moverBotao() {
    const maxTop = 100;   
    const minLeft = -80;   
    const maxLeft = 80;     

    this.naoTop = Math.floor(Math.random() * maxTop);
    this.naoLeft = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
  }



}
