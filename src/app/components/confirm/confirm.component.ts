import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit{
  mostrarLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarLoading = false;
    }, 2000); // 1.5 segundos
  }

  constructor(private router: Router) { }

  confirmar() {
    this.router.navigate(['/convite']);
  }

  mostrarAlertaNegativo = false;

  negar() {
    this.mostrarAlertaNegativo = true;
  }

  fecharAlertaNegativo() {
    this.mostrarAlertaNegativo = false;
  }
}

