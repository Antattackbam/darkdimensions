
import React from 'react';
import styled from 'styled-components';

const Titlehead = styled.div`
display: flex;
height: 150px;
background-size: cover;
background-image: url('https://cdn.wallpapersafari.com/3/25/qFOxCQ.jpg');
justify-content: center;
align-items: center;
background-color: black;
border-bottom: 1px solid grey;

`;

  
const Title = () => {
  return (
    <Titlehead>
      <h1>Dark Dimensions</h1>
    </Titlehead>
  );
};
  
export default Title;