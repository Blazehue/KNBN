"use client";

import { useState } from "react";
import { KanbanBoard } from "@/components/KanbanBoard";
import { KanbanHeader } from "@/components/KanbanHeader";
import { IntroAnimation } from "@/components/IntroAnimation";
import { BackgroundParticles } from "@/components/BackgroundParticles";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundParticles />
      <div className="relative z-10">
        <KanbanHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="container mx-auto px-6 py-8">
          <KanbanBoard searchQuery={searchQuery} />
        </main>
      </div>
    </div>
  );
}