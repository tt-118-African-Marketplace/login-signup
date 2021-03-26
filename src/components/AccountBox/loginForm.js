import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'
import { AccountBox } from './index'

export function LoginForm(props) {

    const { switchToSignUp } = useContext(AccountContext);

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Label>Department: 
                <select>
                {/* <select value={this.state.value} onChange={this.handleChange}> */}
                    <option value="select">Choose one</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                {/* </select> */}
                </select>
               
            </Label>
        </FormContainer>
        <Marginer direction="vertical" margin={5} />
        <SubmitButton type="submit">Signin</SubmitButton>
        <MutedLink>Don't have an account?<BoldLink href="#" onClick={switchToSignUp}> Signup here!</BoldLink></MutedLink>
    </BoxContainer>
    );
}

