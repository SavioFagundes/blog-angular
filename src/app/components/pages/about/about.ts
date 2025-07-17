import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  onImageError(event: any) {
    event.target.style.display = 'none';
    // Criar um placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'avatar-placeholder';
    placeholder.innerHTML = '👤';
    event.target.parentNode.appendChild(placeholder);
  }
}
