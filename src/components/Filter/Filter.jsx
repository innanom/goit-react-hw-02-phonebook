import React from "react";
import { PropTypes } from 'prop-types';

const Filter = ({value, onChange}) => {
    return (
        <label>
            Find contacts by Name
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
}
export default Filter;
