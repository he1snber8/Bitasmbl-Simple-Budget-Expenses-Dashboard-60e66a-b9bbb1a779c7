import { create } from 'zustand';
import type { Entry } from './budgetStore';

interface SummaryState {
  period: 'month' | 'year';
  setPeriod: (p: 'month' | 'year') => void;
}

export const useSummaryStore = create<SummaryState>((set) => ({
  period: 'month',
  setPeriod: (p) => set({ period: p }),
}));

export function getMonthlyTotals(entries: Entry[], month: number, year: number){
  return entries.reduce((acc,e)=>{
    const d=new Date(e.date);
    if(d.getMonth()===month && d.getFullYear()===year){
      acc[e.type]+=e.amount;
    }
    return acc;
  },{income:0,expense:0});
}