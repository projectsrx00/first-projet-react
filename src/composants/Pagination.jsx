
function Pagination(props) {
    return (
        <div>
            <button onClick={() => props.setPage(props.page - 1)}
                disabled={props.page === 1}>
                Précédent
            </button>

            <span> Page {props.page} </span>

            <button onClick={() => props.setPage(props.page + 1)}
                disabled={props.page === props.totalPages}>
                Suivant
            </button>
        </div>
    );
}

export default Pagination;
