import PropTypes from "prop-types";

Pagination.prototypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}

Pagination.defaultProps = {
    onPageChange: null,

}
export function Pagination(props: any) {
    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    const  totalPage = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage: any) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div>
            <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>Prev</button>
            <button disabled={_page >= totalPage} onClick={() => onPageChange(pagination._page + 1)}>Next</button>
        </div>
    );
};
