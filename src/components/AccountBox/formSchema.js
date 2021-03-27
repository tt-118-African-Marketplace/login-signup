import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('username is required').min(3, 'username must be at least 3 characters long'),
    password: yup.string().required('password is required').min(8, 'password must be at least 8 characters long'),
    department: yup.string().oneOf(['buyer', 'seller'], 'department is required'),
});