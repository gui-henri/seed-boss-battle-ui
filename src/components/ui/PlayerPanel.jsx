import React, { useState } from 'react';
import { Sword, Zap, User, Flame } from 'lucide-react';

/**
 * 🔒 [NAo mexer] - Painel do Jogador Compacto + Feed de Combate.
 */
export default function PlayerPanel({
  combo = 0,
  mana = 0,
  realizarAtaqueBasico,
  realizarAtaqueEspecial,
  bossLogs = []
}) {
  // Definir nome do jogador
  // Cooldown do ataque
   const [playerName, setPlayerName] = useState('Dev Seedeiro');
   const [isAttacking, setIsAttacking] = useState(false);

  const manaPercentage = Math.min(100, Math.round((mana / 50) * 100));
  const isManaFull = mana >= 50;
  const isCriticalNext = combo === 9; // Próximo golpe (10º) será o crítico

  const handleBasicAttackClick = async () => {
    setIsAttacking(true);
    setTimeout(()=> setIsAttacking(false), 150)
  };

  const handleSpecialAttackClick = async () => {
  };

  return (
    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 shadow-xl backdrop-blur-xl space-y-4">
      {/* Header com Edição de Nome do Jogador */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <User className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-300">Seu Nome:{playerName}</span>
        </div>

        {/* Inut para o nome do jogador */}
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          type="text"
          placeholder="Digite seu nome..."
          className="bg-slate-950 border border-slate-700/80 text-white rounded-lg px-3 py-1 text-xs font-semibold focus:outline-none focus:border-emerald-500 w-44 transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className={`p-2.5 rounded-lg border transition-all ${isCriticalNext
          ? 'bg-amber-950/30 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
          : 'bg-slate-950/60 border-slate-800'
          }`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Combo</span>
            <span className="text-xs font-extrabold text-white font-mono-custom">{combo}/10</span>
          </div>

          <div className="grid grid-cols-10 gap-0.5 mt-1">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${idx < combo
                  ? idx === 9
                    ? 'bg-amber-400 animate-pulse'
                    : 'bg-emerald-400'
                  : 'bg-slate-800'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className={`p-2.5 rounded-lg border transition-all ${isManaFull
          ? 'bg-purple-950/30 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
          : 'bg-slate-950/60 border-slate-800'
          }`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mana</span>
            <span className="text-xs font-extrabold text-purple-400 font-mono-custom">{mana}/50 MP</span>
          </div>

          <div className="h-1.5 w-full bg-slate-950 rounded-full mt-1 border border-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${isManaFull
                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-400 animate-pulse'
                : 'bg-purple-600'
                }`}
              style={{ width: `${manaPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={handleBasicAttackClick}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${isCriticalNext
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 animate-bounce'
            : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 active:scale-95'
            }`}
        >
          {/* Adicionar spin apenas durante ataque */}
          <Sword className={`w-4 h-4 ${isAttacking ? 'animate-spin' : ' '}`} />
          {isCriticalNext ? '💥 CRÍTICO! (20)' : '⚔️ ATAQUE (3)'}
        </button>

        <button
          onClick={handleSpecialAttackClick}
          disabled={!isManaFull}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${isManaFull
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 active:scale-95 cursor-pointer'
            : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
            }`}
        >
          <Zap className={`w-4 h-4 ${isManaFull ? 'text-amber-300 animate-pulse' : 'text-slate-600'}`} />
          {isManaFull ? '⚡ ESPECIAL! (100)' : `🔒 MANA (${mana}/50)`}
        </button>
      </div>

      {/* Feed de Combate ao Vivo */}
      <div className="pt-2 border-t border-slate-800/80">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          Feed de Combate ao Vivo
        </h3>

        <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
          {bossLogs && bossLogs.length > 0 ? (
            bossLogs.map((log) => (
              <div
                key={log.id}
                className={`flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-md border transition-all ${log.type === 'SPECIAL'
                  ? 'bg-purple-950/40 border-purple-500/40 text-purple-200'
                  : log.type === 'CRITICAL'
                    ? 'bg-amber-950/40 border-amber-500/40 text-amber-200 font-bold'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                  }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[9px] text-slate-500 font-mono-custom">{log.timestamp}</span>
                  <span className="font-semibold text-slate-200 truncate max-w-[120px]">{log.player}</span>
                </div>

                <div className="flex items-center gap-1 font-mono-custom font-bold shrink-0">
                  {log.type === 'SPECIAL' && (
                    <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30">
                      ⚡ ESPECIAL
                    </span>
                  )}
                  {log.type === 'CRITICAL' && (
                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded border border-amber-500/30">
                      💥 CRÍTICO!
                    </span>
                  )}
                  <span className={
                    log.type === 'SPECIAL'
                      ? 'text-purple-400'
                      : log.type === 'CRITICAL'
                        ? 'text-amber-400'
                        : 'text-rose-400'
                  }>
                    -{log.damage} HP
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[10px] text-slate-500 italic text-center py-2">Nenhum ataque registrado ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}
