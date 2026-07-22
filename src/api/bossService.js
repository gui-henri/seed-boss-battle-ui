// Configuração da URL da API da VPS (pode ser sobrescrita por VITE_API_URL no .env)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * 🔒 [MÓDULO BLINDADO] - Os alunos NÃO precisam alterar este arquivo.
 * Ele contém todas as funções prontas que comunicam com o backend do Boss na VPS.
 */

export async function obterEstadoBoss() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/boss`);
    if (!res.ok) throw new Error('Falha ao obter estado do Boss');
    return await res.json();
  } catch (err) {
    console.error('Erro na API do Boss:', err);
    return null;
  }
}

/**
 * Envia um ataque básico para o Boss.
 * @param {number} comboAtual - O valor do contador do combo (1 a 10)
 * @param {string} player - O nome do jogador/aluno
 */
export async function enviarAtaqueAoBoss(comboAtual, player = 'Dev Seedeiro') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/boss/attack`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comboCount: comboAtual, player })
    });
    return await res.json();
  } catch (err) {
    console.error('Erro ao enviar ataque:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Envia um ataque especial (super poder de 100 de dano) para o Boss.
 * @param {string} player - O nome do jogador/aluno
 */
export async function enviarAtaqueEspecial(player = 'Dev Seedeiro') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/boss/special-attack`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player })
    });
    return await res.json();
  } catch (err) {
    console.error('Erro ao enviar ataque especial:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Reseta a vida do Boss para 2000 HP (Uso pelo facilitador/professor).
 */
export async function resetarBoss(maxHp = 2000) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/boss/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ maxHp })
    });
    return await res.json();
  } catch (err) {
    console.error('Erro ao resetar Boss:', err);
    return { success: false };
  }
}
