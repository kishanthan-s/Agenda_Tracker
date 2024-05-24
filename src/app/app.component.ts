import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Agenda_Tracker';

  onSubmit() {
    
  }
}
