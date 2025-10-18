export interface Card {
  id: string;
  title: string;
  description: string;
  columnId: string;
  order: number;
  createdAt: string;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
  dueDate?: string;
}

export interface Column {
  id: string;
  title: string;
  order: number;
  cards: Card[];
}

export interface Board {
  columns: Column[];
}

export type ColumnId = string;
export type CardId = string;