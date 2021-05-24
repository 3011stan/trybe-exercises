import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica que há um input de e-mail na tela', () => {
  const { getByLabelText } = render(<App />); // Acessando elementos da sua tela.
  const inputEmail = getByLabelText('Email'); // o 'render(<App />)' retorna uma série de dados, entre eles os seletores.

  // fazer teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');

});

//Etapas
// Acessar os elementos da sua tela
// Interagir com eles (se houver necessidade).
// Realizar o teste.