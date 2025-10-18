"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/types/kanban";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Pencil, Trash2, Clock, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface KanbanCardProps {
  card: Card;
  onEdit: (id: string, title: string, description: string) => void;
  onDelete: (id: string) => void;
}

export function KanbanCard({ card, onEdit, onDelete }: KanbanCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleSave = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert('Card title cannot be empty');
      return;
    }
    if (trimmedTitle.length > 100) {
      alert('Card title is too long (max 100 characters)');
      return;
    }
    onEdit(card.id, trimmedTitle, description.trim());
    setIsEditOpen(false);
  };

  const isDone = card.columnId === "done";

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="group bg-card border border-border rounded-lg p-4 mb-3 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 hover:border-primary/50"
      >
        <div className="flex items-start gap-2">
          <button
            className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h3 className={`font-medium text-foreground mb-1 break-words relative transition-all duration-500 ${isDone ? 'opacity-60' : ''}`}>
              <span className="relative inline-block">
                {card.title}
                {isDone && (
                  <span 
                    className="absolute left-0 top-1/2 h-[2px] bg-foreground animate-strikethrough"
                    style={{
                      animation: 'strikethrough 0.5s ease-out forwards'
                    }}
                  />
                )}
              </span>
            </h3>
            {card.description && (
              <p className={`text-sm text-muted-foreground break-words transition-opacity duration-500 ${isDone ? 'opacity-50' : ''}`}>
                {card.description}
              </p>
            )}
            
            {/* Priority and Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {card.priority && (
                <Badge 
                  variant={card.priority === 'high' ? 'destructive' : card.priority === 'medium' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {card.priority}
                </Badge>
              )}
              {card.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {card.dueDate && (
                <Badge variant="secondary" className="text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(card.dueDate).toLocaleDateString()}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsEditOpen(true)}
            >
              <Pencil className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-destructive hover:text-destructive"
              onClick={() => setIsDeleteOpen(true)}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Card</DialogTitle>
            <DialogDescription>
              Make changes to your card here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter card title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter card description (optional)"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Card</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{card.title}&quot;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onDelete(card.id);
                setIsDeleteOpen(false);
              }}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}