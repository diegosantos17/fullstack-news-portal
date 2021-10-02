import { Component, OnInit } from '@angular/core';
import { News } from '../_models/news.model';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAll().subscribe(response => {
      this.newsList = response.data;
    });
  }

}
