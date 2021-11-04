import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  public searchQuery!: string;

  constructor(private router: Router, private movieService: MovieService) {}

  getSearchResults() {
    if (this.searchQuery) {
      this.movieService.searchMovies(this.searchQuery);
      this.router.navigate(['/search']);
      this.searchQuery = '';
    }
  }
  ngOnInit(): void {}
}
