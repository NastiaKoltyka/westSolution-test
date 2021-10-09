import { Component, OnInit } from '@angular/core';
import { New } from '../new';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news:New[]=[]
  constructor() {
    // this.news='';
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-10-09&sortBy=popularity&apiKey=c5f654ce1b3b4c7b84448955484fbb73')
      .then(response => response.json())
      .then( (data) => {
        this.news=data.articles
        console.log(this.news)
      })

  }

  ngOnInit(): void {
  }

}
