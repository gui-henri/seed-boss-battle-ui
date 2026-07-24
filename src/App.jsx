import React from 'react';
import BossScreen from './components/ui/BossScreen';
import PlayerPanel from './components/ui/PlayerPanel';
import { useBossState } from './api/socket';
import { useJogadorCombat } from './hooks/useJogadorCombat';
import { useComboAtaque } from './hooks/useComboAtaque';

export default function App() {
  // 🔒 Conexão WebSocket com o Boss (Não mexer)
  const { boss } = useBossState();

  // ✏️ Hook
  const{combo, realizarAtaque} = useComboAtaque()

  return (
    <div className="min-h-screen py-4 px-4 max-w-xl mx-auto flex flex-col justify-between space-y-4">
      {/* Header Compacto da Aplicação */}
      <header className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-extrabold text-slate-950 text-sm shadow-md">
            S
          </div>
          <h1 className="text-sm font-extrabold tracking-tight text-white">Seed-a-Monster ⚔️</h1>
        </div>

        <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-lg text-emerald-400 font-mono-custom font-semibold">
          ● SEED A BIT
        </span>
      </header>

      <main className="space-y-4">
        <BossScreen boss={boss} />
        <PlayerPanel
          realizarAtaqueBasico={realizarAtaque}
          combo = {combo}
        />
      </main>

      <footer className="text-center text-[10px] text-slate-500 pt-2 border-t border-slate-900">
        <p>Treinamento de Programação • <strong className="text-slate-400">Seed a Bit (UFRPE)</strong> 🚀</p>
      </footer>
    </div>
  );
}
