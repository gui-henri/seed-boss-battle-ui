import { useComboAtaque } from './useComboAtaque';
import { useRegeneracaoMana } from './useRegeneracaoMana';

/**
 * ✏️ [EXERCÍCIO 3 - Custom Hook]
 * 
 * OBJETIVO:
 * Agrupar a lógica de combo (useComboAtaque) e de mana (useRegeneracaoMana) em um único Custom Hook!
 * 
 * REGRAS:
 * 1. Invoque os hooks `useComboAtaque` e `useRegeneracaoMana`.
 * 2. Extraia `combo`, `realizarAtaque`, `mana` e `realizarAtaqueEspecial`.
 * 3. Retorne um único objeto limpo com todos os 4 itens:
 *    return { combo, mana, realizarAtaque, realizarAtaqueEspecial };
 */
export function useJogadorCombat() {
  const { combo, realizarAtaque } = useComboAtaque();
  const { mana, realizarAtaqueEspecial } = useRegeneracaoMana();

  return {
    combo,
    mana,
    realizarAtaque,
    realizarAtaqueEspecial
  };
}
