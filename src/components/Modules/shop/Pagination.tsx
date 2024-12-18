import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="pagination flex justify-center items-center mt-5 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`btn btn-sm ${
            currentPage === index + 1
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
