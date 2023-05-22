import PropTypes from "prop-types";
import {useRef, useState} from "react";

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
}

PostFiltersForm.defaultProps = {
    onSubmit: null,
}
export function PostFiltersForm(props: any) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
   const typingTimeoutRef =  useRef(null);
    function handleSearchChange(e: any) {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            };
            onSubmit(formValues);
        }, 300);
    }
    return (
        <div>
            <form>
                <input type="text" value={searchTerm} onChange={handleSearchChange}/>
            </form>

        </div>
    );
};
