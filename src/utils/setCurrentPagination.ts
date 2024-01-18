export const setCurrentPagination = (currentPage: number, allPages: number) => {
  const paginationCounter = 2;
  if (allPages) {
    const pagination = [];
    let isEmpty = true;
    for (let page = 1; page <= allPages; page += 1) {
      if (page <= paginationCounter && paginationCounter <= allPages) {
        pagination.push(page);
      } else if (
        page > currentPage - paginationCounter &&
        page < currentPage + paginationCounter
      ) {
        pagination.push(page);
        isEmpty = true;
      } else if (page > allPages - paginationCounter) {
        pagination.push(page);
      } else if (isEmpty) {
        pagination.push('...');
        isEmpty = false;
      }
    }
    return pagination;
  }
  return null;
};
