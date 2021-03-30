import React, { useContext, useState } from 'react'
import { MutedLink, BoldLink, BoxContainer, FormContainer, Input, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);
    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('#', {
            method: 'POST',
            body: JSON.stringify({username:{username:username, password:password}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': 'props.token'
            })
        }) .then((res) => res.json()
        ).then((data) => {
            props.updateToken(data)
        })
        .catch(err => console.log(err))
    }


    return <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
            <Input onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
            <Input onChange={(e) => { setPassword(e.target.value)}} value={password} type="password" placeholder="Password"/>
            <Label>Department: 
               
                <select name='department'>
                    <option value="">Choose one</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
                
               
            </Label>
        </FormContainer>
        <Marginer direction="vertical" margin={5} />
        <SubmitButton type="submit" value='submit'>Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>Already have an account?<BoldLink href="#" onClick={switchToSignin}> Signin</BoldLink></MutedLink>
    </BoxContainer>
}