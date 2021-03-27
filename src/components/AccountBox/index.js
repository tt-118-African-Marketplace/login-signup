import React, { useState } from 'react'
import styled from 'styled-components'
import { LoginForm } from '../AccountBox/loginForm'
import { SignupForm } from '../AccountBox/signupForm'
import { motion } from 'framer-motion'
import { AccountContext } from '../AccountBox/accountContext';

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: white;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    margin-top: 3rem;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 2em;`
;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(232,74,52);
    background: linear-gradient(90deg, rgba(232,74,52,1) 20%, rgba(232,74,52,1) 100%);
`;

const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 30px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.24;
    color: white;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: white;
    font-weight: 500;
    font-size: 11px;
    font-family: Poppins;
    z-index: 10;
    padding-bottom: 2rem;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    /* z-index: 10; */
    padding: 0 1.6em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    },
}

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
}



export function AccountBox(props) {
    const  [isExpanded, setExpanded ] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1300);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup')
        }, 1000);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin')
        }, 1000);
    }


    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition} />
            {active === 'signin' && (
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign in to continue!</SmallText>
            </HeaderContainer>
            )}
            {active === 'signup' && (
            <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign up to continue!</SmallText>
            </HeaderContainer>  
            )}
        </TopContainer>
        <InnerContainer>
            {active === 'signin' && <LoginForm />}
            {active === 'signup' && <SignupForm />}
        </InnerContainer>
        {/* <p onClick={playExpandingAnimation}>click here</p> */}
    </BoxContainer>
    </AccountContext.Provider>
    );
}