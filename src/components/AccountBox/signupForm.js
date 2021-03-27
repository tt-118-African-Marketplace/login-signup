import React, { useContext } from 'react'
import { MutedLink, BoldLink, BoxContainer, FormContainer, Input, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);


    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password"/>
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