import { create } from 'zustand';

export type EntryType = 'income' | 'expense';
export interface Entry {
  id: string;
  type: EntryType;
  date: string;
  category: string;
  description?: string;
  amount: number;
}

interface BudgetState {
  entries: Entry[];
  addEntry: (entry: Entry) => void;
  updateEntry: (id: string, patch: Partial<Entry>) => void;
  deleteEntry: (id: string) => void;
}

export const useBudgetStore = create<BudgetState>((set) => ({
  entries: [],
  addEntry: (entry) => set((s) => ({ entries: [...s.entries, entry] })),
  updateEntry: (id, patch) => set((s) => ({
    entries: s.entries.map(e => e.id === id ? { ...e, ...patch } : e)
  })),
  deleteEntry: (id) => set((s) => ({
    entries: s.entries.filter(e => e.id !== id)
  })),
}));