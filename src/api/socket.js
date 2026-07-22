import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * 🔒 [MÓDULO BLINDADO] - Conexão WebSocket em tempo real com a VPS.
 * Mantém o Boss sincronizado instantaneamente no projetor e na tela de todos.
 */
export const socket = io(SOCKET_URL, {
  autoConnect: true,
  reconnection: true
});

export function useBossState() {
  const [boss, setBoss] = useState({
    name: 'Bug Supremo de Produção',
    maxHp: 2000,
    currentHp: 2000,
    status: 'ALIVE',
    totalDamageReceived: 0,
    logs: []
  });
  const [connected, setConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setConnected(true);
    }

    function onDisconnect() {
      setConnected(false);
    }

    function onBossUpdated(updatedBoss) {
      setBoss(updatedBoss);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('boss_updated', onBossUpdated);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('boss_updated', onBossUpdated);
    };
  }, []);

  return { boss, connected };
}
