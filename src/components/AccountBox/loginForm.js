import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'




export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://african-marketplace-tt118.herokuapp.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({username:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then(
            (res) => res.json()
        ).then((data) => {
            props.updateToken(data);
        })
        .catch(err => console.log(err))
    }


// const userHandler = event => {({... user, [event.target.name]: event.target.value})

    return (
    <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
            <Input onChange={(e) => { setUsername(e.target.value)}} type="text" placeholder="Username" />
            <Input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
            <Label>Department: 
               
                <select name='department'>
                    <option value="">Choose one</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
               
               
            </Label>
        </FormContainer>
        <Marginer direction="vertical" margin={5} />
        <SubmitButton type="submit" value="submit">Signin</SubmitButton>
        <MutedLink>Don't have an account?{" "}
        <BoldLink href="#" 
        onClick={switchToSignup}> Signup here!</BoldLink></MutedLink>
    </BoxContainer>
    );
}
