import { useState, useEffect } from 'react';
import { enviarAtaqueEspecial } from '../api/bossService';

/**
 * ✏️ [EXERCÍCIO 2 - useState + useEffect]
 * 
 * OBJETIVO:
 * Regenerar a mana do jogador ao longo do tempo usando useEffect com setInterval,
 * e permitir soltar o Ataque Especial quando a mana atingir 50.
 * 
 * REGRAS:
 * 1. Crie o estado `mana` iniciando em 0 utilizando `useState(0)`.
 * 2. Use o `useEffect` para criar um temporizador (`setInterval`):
 *    - A cada 1500ms (1.5s), adicione +5 de mana até o limite de 50.
 *    - IMPORTANTE: Retorne a função de limpeza `return () => clearInterval(timer)` para evitar vazamento de memória!
 * 3. Na função `realizarAtaqueEspecial(player)`:
 *    - Se `mana === 50`: resete o estado da mana para 0 (`setMana(0)`) e chame `enviarAtaqueEspecial(player)`.
 * 4. Retorne um objeto com `{ mana, realizarAtaqueEspecial }`.
 */
export function useRegeneracaoMana() {
  // TODO
  const mana = 0;

  const realizarAtaqueEspecial = async (player = 'Dev Seedeiro') => {
    // TODO: Implementar lógica do ataque especial
  };

  return { mana, realizarAtaqueEspecial };
}
