import React from 'react'; // rsc is the shortcut for generating a react stateless component

const Gif = (props) => {
  const { gifId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`; // javascript variable
  return (
    <img className="gif" src={url} alt="gif" />
  );
};

export default Gif;

// rcc is the shortcut for generating a react class component
