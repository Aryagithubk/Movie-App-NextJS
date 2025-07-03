"use client";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && currentPage > 3) ||
      (i === currentPage + 2 && currentPage < totalPages - 2)
    ) {
      pages.push("...");
    }
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex items-center gap-2">
        <li>
          <button
            className="px-3 py-1 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-white transition"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {pages.map((page, idx) =>
          typeof page === "number" ? (
            <li key={page}>
              <button
                className={`px-3 py-1 rounded-lg ${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-white"
                } transition`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ) : (
            <li
              key={`ellipsis-${idx}`}
              className="px-2 py-1 text-muted-foreground"
            >
              ...
            </li>
          )
        )}
        <li>
          <button
            className="px-3 py-1 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-white transition"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
