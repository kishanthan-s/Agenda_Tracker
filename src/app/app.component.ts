import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from '../models/todo.model';


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
  title = 'Agenda Tracker';
  todos: Todo[] = []
  
  onSubmit(form: NgForm){
    let todo = new Todo(uuidv4(), form.value.title, false);
    this.todos.push(todo);
    form.resetForm();
  }
  
  onComplete(id: String){
    let todo = this.todos.filter(x => x.id === id)[0];
    if (todo) {
        todo.isComplete = true;
    } else {
        // Handle case where todo with given id is not found
    }
  }



  
}
function uuidv4(): string {
  throw new Error('Function not implemented.');
}

