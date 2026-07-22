import React from 'react';
import { Skull, ShieldAlert } from 'lucide-react';

/**
 * 🔒 [MÓDULO BLINDADO] - Tela do Boss Compacta (Visualização da Vida e Status).
 */
export default function BossScreen({ boss }) {
  const hpPercentage = Math.max(0, Math.min(100, Math.round((boss.currentHp / boss.maxHp) * 100)));
  const isDefeated = boss.status === 'DEFEATED' || boss.currentHp <= 0;

  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900/90 border border-slate-800 p-4 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-4">
        {/* Sprite / Avatar Compacto do Boss */}
        <div className={`relative flex items-center justify-center shrink-0 w-14 h-14 rounded-xl border ${
          isDefeated 
            ? 'bg-slate-800 border-slate-700 text-slate-600' 
            : 'bg-rose-950/40 border-rose-500/50 text-rose-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
        }`}>
          {isDefeated ? (
            <Skull className="w-8 h-8 animate-bounce" />
          ) : (
            <ShieldAlert className="w-8 h-8 animate-pulse" />
          )}
        </div>

        {/* Informações e Barra de Vida do Boss */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 truncate">
              <h1 className="text-lg font-bold text-white truncate">
                {boss.name}
              </h1>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                isDefeated 
                  ? 'bg-slate-800 text-slate-400 border-slate-700' 
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}>
                {isDefeated ? '💀 DERROTADO' : '🔥 CHEFÃO'}
              </span>
            </div>

            <span className={`text-xs font-mono-custom font-bold shrink-0 ${isDefeated ? 'text-slate-500' : 'text-rose-400'}`}>
              {boss.currentHp} / {boss.maxHp} HP ({hpPercentage}%)
            </span>
          </div>

          {/* Barra de Progresso do HP */}
          <div className="h-4 w-full bg-slate-950 rounded-full p-0.5 border border-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isDefeated
                  ? 'bg-slate-700'
                  : hpPercentage < 25
                  ? 'bg-gradient-to-r from-rose-600 to-red-500 animate-pulse'
                  : 'bg-gradient-to-r from-rose-500 via-purple-500 to-emerald-400'
              }`}
              style={{ width: `${hpPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
