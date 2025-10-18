"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { ChevronDown, Plus, Trash2 } from "lucide-react";

interface Board {
  id: string;
  name: string;
}

interface BoardSelectorProps {
  boards: Board[];
  currentBoardId: string;
  onBoardChange: (boardId: string) => void;
  onBoardCreate: (name: string) => void;
  onBoardDelete: (boardId: string) => void;
}

export function BoardSelector({
  boards,
  currentBoardId,
  onBoardChange,
  onBoardCreate,
  onBoardDelete,
}: BoardSelectorProps) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");

  const currentBoard = boards.find((b) => b.id === currentBoardId);

  const handleCreate = () => {
    if (newBoardName.trim()) {
      onBoardCreate(newBoardName.trim());
      setNewBoardName("");
      setIsCreateOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            {currentBoard?.name || "Select Board"}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Switch Board</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {boards.map((board) => (
            <DropdownMenuItem
              key={board.id}
              onClick={() => onBoardChange(board.id)}
              className="justify-between"
            >
              <span>{board.name}</span>
              {board.id === currentBoardId && (
                <span className="text-primary">✓</span>
              )}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsCreateOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Board
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Board</DialogTitle>
            <DialogDescription>
              Give your new board a name. You can always change it later.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="board-name">Board Name</Label>
              <Input
                id="board-name"
                value={newBoardName}
                onChange={(e) => setNewBoardName(e.target.value)}
                placeholder="e.g., Personal Tasks, Work Projects"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleCreate();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreate}>Create Board</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
