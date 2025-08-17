"use client";

import { ModalProps } from "@/types";
import { MouseEvent } from "react";

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-base-100 p-5 md:py-12 md:px-10 rounded-lg shadow-lg max-w-4xl min-w-72 relative overflow-y-auto max-h-[90vh]"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-red-400 hover:text-red-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
