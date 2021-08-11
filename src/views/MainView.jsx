import React, { useState } from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import QRcode from 'react-qr-code';

const MainView = () => {
  const [text, setText] = useState('');

  const onChangeText = (event) => setText(event.target.value);

  return (
    <Container>
      <Container.Box flexDirection="column">
        <div className="qrcode-area">
          <QRcode value={text} size={300} level="L" />
        </div>
        <KeyboardInfoBox>CAPSLOCK</KeyboardInfoBox>
        <TextInputBox>
          <TextInput
            type="text"
            value={text}
            onChange={onChangeText}
            autoFocus
          />
        </TextInputBox>
      </Container.Box>
    </Container>
  );
};

const KeyboardInfoBox = styled.div``;

const TextInputBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 12px;
  border-color: #74b9ff;

  :focus {
    outline: none;
  }
`;

export default MainView;
