import PropTypes from "prop-types";
import {useState} from "react";

TodoForm.prototype = {
    onSubmit: PropTypes.func
}

TodoForm.defaultProps = {
    onSubmit: null,
}
export function TodoForm(props: any) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    const handleValueChange = (e: any) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    const handleOnSubmit = () => {
        if (!onSubmit) return;
        const formValues = {
            title: value
        };

        onSubmit(formValues);
        setValue('');
    }
    return (
        <div>
           <form onSubmit={handleOnSubmit}>
               <input type="text" value={value} onChange={handleValueChange}/>
           </form>
        </div>
    );
};
