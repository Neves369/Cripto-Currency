import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Container } from './styles';

export default function Creditos() {
  return (
    <Container>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <Card>
        <Card.Content>
          <Title>Nome do Grupo</Title>
          <Paragraph>Link para o github</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>

    </Container>
  );
}


