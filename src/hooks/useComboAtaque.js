import { useState } from 'react';
import { enviarAtaqueAoBoss } from '../api/bossService';

/**
 * ✏️ [EXERCÍCIO 1 - useState]
 * 
 * OBJETIVO:
 * Gerenciar o estado do combo de ataques básicos do jogador.
 * 
 * REGRAS:
 * 1. Crie o estado `combo` iniciando em 0 utilizando `useState(0)`.
 * 2. Na função `realizarAtaque(player)`:
 *    - Calcule o valor do próximo combo.
 *    - Se `novoCombo === 10`:
 *        Chame a função `enviarAtaqueAoBoss(10, player)` e resete o estado `combo` para 0.
 *    - Caso contrário (`novoCombo < 10`):
 *        Chame a função `enviarAtaqueAoBoss(novoCombo, player)` e atualize o estado `combo` para `novoCombo`.
 * 3. Retorne um objeto com `{ combo, realizarAtaque }`.
 */
export function useComboAtaque() {
  // TODO
  const combo = 0;

  const realizarAtaque = async (player = 'Dev Seedeiro') => {
    // TODO: Implementar lógica de combo
    await enviarAtaqueAoBoss(1, player);
  };

  return { combo, realizarAtaque };
}
