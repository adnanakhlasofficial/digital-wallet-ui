interface Queries {
  limit: number;
  currentPage: number;
}

export const handlePrevPage = (
  state: Queries,
  setState: React.Dispatch<React.SetStateAction<Queries>>,
) => {
  if (state.currentPage <= 1) return;

  setState((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
};
export const handleNextPage = (
  state: Queries,
  setState: React.Dispatch<React.SetStateAction<Queries>>,
  totalPages: number,
) => {
  if (state.currentPage >= totalPages) return;

  setState((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
};
