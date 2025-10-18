import { useState, useEffect } from 'react';
import { Board } from '@/types/kanban';

interface BoardData {
  id: string;
  name: string;
  board: Board;
  createdAt: string;
}

export function useBoardManager() {
  const [boards, setBoards] = useState<BoardData[]>([]);
  const [currentBoardId, setCurrentBoardId] = useState<string>('default');

  useEffect(() => {
    const savedBoards = localStorage.getItem('kanban-boards');
    if (savedBoards) {
      const parsed = JSON.parse(savedBoards);
      setBoards(parsed);
    }
  }, []);

  useEffect(() => {
    if (boards.length > 0) {
      localStorage.setItem('kanban-boards', JSON.stringify(boards));
    }
  }, [boards]);

  const createBoard = (name: string, initialBoard: Board) => {
    const newBoard: BoardData = {
      id: `board-${Date.now()}`,
      name,
      board: initialBoard,
      createdAt: new Date().toISOString(),
    };
    setBoards((prev) => [...prev, newBoard]);
    return newBoard.id;
  };

  const deleteBoard = (boardId: string) => {
    setBoards((prev) => prev.filter((b) => b.id !== boardId));
    if (currentBoardId === boardId && boards.length > 1) {
      setCurrentBoardId(boards[0].id);
    }
  };

  const updateBoard = (boardId: string, board: Board) => {
    setBoards((prev) =>
      prev.map((b) => (b.id === boardId ? { ...b, board } : b))
    );
  };

  const renameBoard = (boardId: string, newName: string) => {
    setBoards((prev) =>
      prev.map((b) => (b.id === boardId ? { ...b, name: newName } : b))
    );
  };

  const getCurrentBoard = () => {
    return boards.find((b) => b.id === currentBoardId);
  };

  return {
    boards,
    currentBoardId,
    setCurrentBoardId,
    createBoard,
    deleteBoard,
    updateBoard,
    renameBoard,
    getCurrentBoard,
  };
}
