import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#271043] to-[#1a0b2e] flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxMmE2IDYgMCAwIDEgMCAxMiA2IDYgMCAwIDEgMC0xMnptMCAyYTQgNCAwIDAgMCAwIDggNCA0IDAgMCAwIDAtOHoiIGZpbGw9IiNjNDcwZjIiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Glowing circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c470f2] rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#9141ac] rounded-full filter blur-[128px] opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-[#c470f2] opacity-30 blur-xl rounded-full"></div>
          <Loader2 className="w-16 h-16 text-[#c470f2] animate-spin" />
        </div>
        <h2 className="mt-8 text-2xl font-bold text-white">Loading</h2>
        <div className="mt-4 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#c470f2] animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-[#c470f2] animate-bounce delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-[#c470f2] animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}