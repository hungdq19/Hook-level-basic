import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../component/fieldInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

TodoForm.propTypes = {};

function TodoForm(props) {
    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('Ban Nhap sai roi... Vui long nhap lai nha')
            .min(5, 'Nhap it nhat phai 5 ki tu nhe'),
    });
    const { handleSubmit } = props;

    const form = useForm({
        defaultValues: {
            firstName: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmitForm = (value) => {
        if (!handleSubmit) return;
        handleSubmit({
            id: uuidv4(),
            notify: value.firstName,
            isComplete: 'new',
        });
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
            <InputField
                name="firstName"
                label="FirstName"
                form={form}
            />
        </form>
    );
}

export default TodoForm;
