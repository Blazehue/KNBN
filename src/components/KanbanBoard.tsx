"use client";

import { useEffect, useState, useMemo } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Board, Card, Column } from "@/types/kanban";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";

const INITIAL_BOARD: Board = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      order: 0,
      cards: [
        {
          id: "card-1",
          title: "Design new landing page",
          description: "Create a modern, responsive design for the homepage",
          columnId: "todo",
          order: 0,
          createdAt: new Date().toISOString(),
        },
        {
          id: "card-2",
          title: "Setup CI/CD pipeline",
          description: "Configure automated testing and deployment",
          columnId: "todo",
          order: 1,
          createdAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      order: 1,
      cards: [
        {
          id: "card-3",
          title: "Implement authentication",
          description: "Add user login and registration functionality",
          columnId: "in-progress",
          order: 0,
          createdAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      order: 2,
      cards: [
        {
          id: "card-4",
          title: "Project setup",
          description: "Initialize Next.js project with TypeScript",
          columnId: "done",
          order: 0,
          createdAt: new Date().toISOString(),
        },
      ],
    },
  ],
};

interface KanbanBoardProps {
  searchQuery: string;
}

export function KanbanBoard({ searchQuery }: KanbanBoardProps) {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    const savedBoard = localStorage.getItem("kanban-board");
    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify(board));
  }, [board]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const card = board.columns
      .flatMap((col) => col.cards)
      .find((c) => c.id === active.id);
    if (card) {
      setActiveCard(card);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const activeColumn = board.columns.find((col) =>
      col.cards.some((card) => card.id === activeId)
    );
    const overColumn = board.columns.find(
      (col) => col.id === overId || col.cards.some((card) => card.id === overId)
    );

    if (!activeColumn || !overColumn) return;

    if (activeColumn.id !== overColumn.id) {
      setBoard((prev) => {
        const newColumns = [...prev.columns];
        const activeColIndex = newColumns.findIndex(
          (col) => col.id === activeColumn.id
        );
        const overColIndex = newColumns.findIndex(
          (col) => col.id === overColumn.id
        );

        const activeCards = [...newColumns[activeColIndex].cards];
        const overCards = [...newColumns[overColIndex].cards];

        const activeCardIndex = activeCards.findIndex(
          (card) => card.id === activeId
        );
        
        // Safety check: ensure card exists before splicing
        if (activeCardIndex === -1) return prev;
        
        const [movedCard] = activeCards.splice(activeCardIndex, 1);

        movedCard.columnId = overColumn.id;

        const overCardIndex = overCards.findIndex((card) => card.id === overId);
        if (overCardIndex >= 0) {
          overCards.splice(overCardIndex, 0, movedCard);
        } else {
          overCards.push(movedCard);
        }

        newColumns[activeColIndex].cards = activeCards.map((card, idx) => ({
          ...card,
          order: idx,
        }));
        newColumns[overColIndex].cards = overCards.map((card, idx) => ({
          ...card,
          order: idx,
        }));

        return { columns: newColumns };
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const activeColumn = board.columns.find((col) =>
      col.cards.some((card) => card.id === activeId)
    );

    if (!activeColumn) return;

    const oldIndex = activeColumn.cards.findIndex((card) => card.id === activeId);
    const newIndex = activeColumn.cards.findIndex((card) => card.id === overId);

    if (oldIndex !== -1 && newIndex !== -1) {
      setBoard((prev) => {
        const newColumns = [...prev.columns];
        const colIndex = newColumns.findIndex(
          (col) => col.id === activeColumn.id
        );
        const reorderedCards = arrayMove(
          newColumns[colIndex].cards,
          oldIndex,
          newIndex
        );
        newColumns[colIndex].cards = reorderedCards.map((card, idx) => ({
          ...card,
          order: idx,
        }));
        return { columns: newColumns };
      });
    }
  };

  const handleAddCard = (columnId: string, title: string, description: string) => {
    const newCard: Card = {
      id: `card-${Date.now()}`,
      title,
      description,
      columnId,
      order: 0,
      createdAt: new Date().toISOString(),
    };

    setBoard((prev) => {
      const newColumns = prev.columns.map((col) => {
        if (col.id === columnId) {
          return {
            ...col,
            cards: [newCard, ...col.cards].map((card, idx) => ({
              ...card,
              order: idx,
            })),
          };
        }
        return col;
      });
      return { columns: newColumns };
    });
  };

  const handleEditCard = (id: string, title: string, description: string) => {
    setBoard((prev) => {
      const newColumns = prev.columns.map((col) => ({
        ...col,
        cards: col.cards.map((card) =>
          card.id === id ? { ...card, title, description } : card
        ),
      }));
      return { columns: newColumns };
    });
  };

  const handleDeleteCard = (id: string) => {
    setBoard((prev) => {
      const newColumns = prev.columns.map((col) => ({
        ...col,
        cards: col.cards.filter((card) => card.id !== id),
      }));
      return { columns: newColumns };
    });
  };

  const filteredBoard: Board = useMemo(() => ({
    columns: board.columns.map((col) => ({
      ...col,
      cards: col.cards.filter(
        (card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })),
  }), [board, searchQuery]);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-6 pb-6 overflow-x-auto">
        {filteredBoard.columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onAddCard={handleAddCard}
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
      <DragOverlay>
        {activeCard ? (
          <div className="bg-card border border-border rounded-lg p-4 shadow-lg rotate-3">
            <h3 className="font-medium text-foreground mb-1">
              {activeCard.title}
            </h3>
            {activeCard.description && (
              <p className="text-sm text-muted-foreground">
                {activeCard.description}
              </p>
            )}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}