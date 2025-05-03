import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import CharacterDescription from './CharacterDescription';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character');
    setCharacters(res.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDescription = (id) => {
    const char = characters.find((el) => el.id === id);
    setSelectedCharacter(char);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Rick and Morty Characters</h1>
      {selectedCharacter ? (
        <CharacterDescription character={selectedCharacter} />
      ) : (
        <CharacterList characters={characters} handleDescription={handleDescription} />
      )}
    </div>
  );
}

export default HomePage;
