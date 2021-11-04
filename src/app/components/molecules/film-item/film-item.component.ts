import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  public movie: any;
  @Input()
  movieId!: number;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe((movie: IMovie) => {
      this.movie = movie;
    });
  }
}
