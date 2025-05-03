import React from 'react';

function CharacterDescription({ character }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={character.image} alt={character.name} style={{ width: '300px', borderRadius: '10px' }} />
      <h2>{character.name}</h2>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Type:</strong> {character.type || 'N/A'}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Episode Appearances:</strong> {character.episode.length}</p>
    </div>
  );
}

export default CharacterDescription;
