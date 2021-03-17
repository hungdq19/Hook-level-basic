import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    
};

// Thằng này dung để trao đổi giữa Todo Form và Thư viên Material-UI
function InputField(props) {
    const {name, label, form} = props;
    const {errors} = form;
    const errMessage = errors[name]
    
    return (
        <div>
            <Controller
                name={name}
                control={form.control}
                as={TextField}
                label={label}
                variant="filled"

                error={!!errMessage}
                helperText={errMessage?.message}

            />
        
        </div>
    );
}

export default InputField;