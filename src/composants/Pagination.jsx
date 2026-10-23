import "./Pagination.css";

function Pagination(props) {
    const pages = [];

    for (let i = 1; i <= props.totalPages; i++) {
    pages.push(i);
    }

    return (
        <nav className="pagination">
            {pages.map((numero) => (
                <button
                    key={numero}
                    className={numero === props.page ? "page-btn active" : "page-btn"}
                    onClick={() => props.setPage(numero)}
                >
                    {numero}
                </button>
            ))}
        </nav>
    );
}

export default Pagination;
