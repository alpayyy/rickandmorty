import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, TextField } from '@mui/material';
import CharacterCard from '@/components/card';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setFilteredCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchText, characters]);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Karakter Ara"
        value={searchText}
        onChange={handleSearchTextChange}
        sx={{ width: 300 }}
        size="small"
        InputLabelProps={{ shrink: true }}
      />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
