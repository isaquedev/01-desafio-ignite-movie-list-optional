import React from 'react'
import { Button } from '../components/Button'
import { Genre } from '../types'

interface SideBarProps {
  genres: Genre[],
  handleClickButton: (id: number) => void,
  selectedGenreId: number
}

export default function SideBar({genres, handleClickButton, selectedGenreId}: SideBarProps) {
  return (
    <div>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </div>
  )
}
