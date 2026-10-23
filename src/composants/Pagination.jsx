import "./Pagination.css";

function Pagination(props) {
    const pages = Array.from({ length: props.totalPages }, (_, i) => i + 1);

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
