import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  modalitiesControl = new FormControl();
  modalities = ['Option 1', 'Option 2', 'Option 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
