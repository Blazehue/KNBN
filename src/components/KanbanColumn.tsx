"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Column } from "@/types/kanban";
import { KanbanCard } from "./KanbanCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface KanbanColumnProps {
  column: Column;
  onAddCard: (columnId: string, title: string, description: string) => void;
  onEditCard: (id: string, title: string, description: string) => void;
  onDeleteCard: (id: string) => void;
}

export function KanbanColumn({
  column,
  onAddCard,
  onEditCard,
  onDeleteCard,
}: KanbanColumnProps) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const handleAddCard = () => {
    if (title.trim()) {
      onAddCard(column.id, title.trim(), description.trim());
      setTitle("");
      setDescription("");
      setIsAddOpen(false);
    }
  };

  return (
    <>
      <div className="bg-muted/40 rounded-lg p-4 min-w-[320px] max-w-[320px] flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg text-foreground flex items-center gap-2">
            {column.title}
            <span className="text-sm text-muted-foreground font-normal">
              ({column.cards.length})
            </span>
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsAddOpen(true)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div
          ref={setNodeRef}
          className={`flex-1 transition-colors rounded-md ${
            isOver ? "bg-accent/50" : ""
          }`}
        >
          <SortableContext
            items={column.cards.map((card) => card.id)}
            strategy={verticalListSortingStrategy}
          >
            {column.cards.map((card) => (
              <KanbanCard
                key={card.id}
                card={card}
                onEdit={onEditCard}
                onDelete={onDeleteCard}
              />
            ))}
          </SortableContext>
          {column.cards.length === 0 && (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No cards yet. Add one to get started!
            </div>
          )}
        </div>
      </div>

      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Card</DialogTitle>
            <DialogDescription>
              Create a new card in {column.title}. Click add when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="new-title">Title</Label>
              <Input
                id="new-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter card title"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAddCard();
                  }
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter card description (optional)"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCard}>Add Card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}