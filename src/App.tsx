import { useEffect, useState } from 'react';

import Content from './components/Content';
import SideBar from './components/SideBar';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { ApiResponse, Genre, Movie } from './types';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<Genre[]>([]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  useEffect(() => {
    api.get('genres').then((response: ApiResponse<Genre[]>) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`movies/?Genre_id=${selectedGenreId}`).then((response: ApiResponse<Movie[]>) => {
      setMovies(response.data);
    });

    api.get(`genres/${selectedGenreId}`).then((response: ApiResponse<Genre>) => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar genres={genres} handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>      

      <Content movies={movies} selectedGenre={selectedGenre}/>
    </div>
  )
}