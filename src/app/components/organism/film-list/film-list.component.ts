import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {
  public movies!: IMovie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: any) => {
      this.movies = movies.results;
    });
  }
}
