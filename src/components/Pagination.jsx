const Pagination = ({ count, paginate, currentPage }) => {
  const pageNumbers = [];
  const postsPerPage = 10;
  const totalPages = Math.ceil(count / postsPerPage);

  if (totalPages === 1) {
    return null;
  }

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
