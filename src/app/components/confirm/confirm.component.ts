import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
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

