import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'


export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);


// const userHandler = event => {({... user, [event.target.name]: event.target.value})

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
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
