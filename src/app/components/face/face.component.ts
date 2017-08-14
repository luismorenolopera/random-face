import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})

export class FaceComponent implements OnInit {

  face = {
    eyes: [
      "eyes1",
      "eyes10",
      "eyes2",
      "eyes3",
      "eyes4",
      "eyes5",
      "eyes6",
      "eyes7",
      "eyes9"
    ],
    nose: [
      "nose2",
      "nose3",
      "nose4",
      "nose5",
      "nose6",
      "nose7",
      "nose8",
      "nose9"
    ],
    mouth: [
      "mouth1",
      "mouth10",
      "mouth11",
      "mouth3",
      "mouth5",
      "mouth6",
      "mouth7",
      "mouth9"
    ]
  };

  eyes:string;
  nose:string;
  mouth:string;
  color:string;
  url:string;

  constructor() {
    this.setUrl();
  }

  ngOnInit() {
    setInterval(() => {this.setUrl();}, 1500);
  }

  setRandom(data) { return data[Math.floor(Math.random() * data.length)]  }

  setUrl() {
    this.url = "https://api.adorable.io/avatars/face";
    this.eyes = this.setRandom(this.face.eyes);
    this.nose = this.setRandom(this.face.nose);
    this.mouth = this.setRandom(this.face.mouth);
    this.color = Math.floor(Math.random()*16777215).toString(16);
    this.url = `${this.url}/${this.eyes}/${this.nose}/${this.mouth}/${this.color}`;
  }

}
