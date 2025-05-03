import React, { useState } from 'react';

function CharacterList({ characters, handleDescription }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const endIndex = currentPage * postsPerPage;
  const startIndex = endIndex - postsPerPage;
  const currentItems = characters.slice(startIndex, endIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {currentItems.map((el) => (
          <div
            key={el.id}
            style={{
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              listStyleType: 'none',
              margin: '20px',
              padding: '15px',
              textAlign: 'center',
            }}
          >
            <img src={el.image} alt={el.name} />
            <li>{el.name}</li>
            <li>{el.species}</li>
            <li style={{ color: el.status === 'Alive' ? 'green' : el.status === 'unknown' ? 'brown' : 'red' }}>
              {el.status}
            </li>
            <button onClick={() => handleDescription(el.id)}>Description</button>
          </div>
        ))}
      </ul>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {[...Array(Math.ceil(characters.length / postsPerPage))].map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            style={{ margin: '0 5px', padding: '5px 10px' }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
