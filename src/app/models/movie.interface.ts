export interface IMovie {
  id: number;
  budget: number;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  title: string;
}
export interface APIResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
