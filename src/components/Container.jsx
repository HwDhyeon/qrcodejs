import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <RootContainer>{children}</RootContainer>;
};

const Box = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

const RootContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

Container.Box = Box;

export default Container;
