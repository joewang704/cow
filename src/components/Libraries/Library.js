import React from 'react';
/**
 * Component that displays single library card
 * @param {object} props - object
 * @param {object} props.library - library object
 */
const Library = ({ library }) => {
  const { name, id } = library;
  return (
    <div>
      {name}
    </div>
  )
}

export default Library

