import React, { useState, useEffect } from "react"; 
import './App.css'
import styled from 'styled-components'
import { AccountBox } from './components/AccountBox';
import axios from 'axios'
import schema from '../src/components/AccountBox/formSchema'
import * as yup from 'yup'


const AppStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

const initialFormValues = {
  username: '',
  password: '',
  department: '',
};

const initialFormErrors = {
  username: '',
  password: '',
  department: '',
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getUsers = () => {
  axios.get('https://african-marketplace-tt118.herokuapp.com/users/:id').then((res) => {
    setUsers(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
};

const postNewUser = (newUser) => {
  axios.post('https://african-marketplace-tt118.herokuapp.com/auth/register', newUser).then((res) => {
    setUsers([res.data, ...users]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
  });
};

const inputChange = (username, value) => {
  yup.reach(schema, username).validate(value).then(() => {
    setFormErrors({
      ...formErrors,
      [username]: '',
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [username]: err.errors[0],
    });
  });
  setFormValues({
    ...formValues, 
    [username]: value,
  });
};

const formSubmit = () => {
  const newUser = {
    username: formValues.username.trim(),
    password: formValues.password.trim(),
    department: ['buyer', 'seller'].filter((dept) => formValues[dept]
    ),
  };
  postNewUser(newUser);
};

useEffect(() => {
  getUsers();
}, []);

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);


  return (
  <AppStyle>
    <AccountBox 
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    disbled={disabled}
    errors={formErrors} />

    {/* {users.map((user) => {
      return <User key={user.id} details={user} />; */}
      
  </AppStyle>
  );
  
}
