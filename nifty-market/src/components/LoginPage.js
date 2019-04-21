import React from 'react';
import styled from 'styled-components';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import skyrimHero from '../images/skyrimHero.jpg';

const LoginDiv = styled.div`
    height: 800px;
    background-image: url(${skyrimHero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: right-align;
`;

const LoginFormDiv = styled.div`
    margin-top: 100px;
    margin-left: 55%;
    width: 400px;
`;

const LabelStylingDiv = styled.div`
    color: white;
    font-size: 1.5rem;
    text-align: left;
`;

class LoginPage extends React.Component {
    render() {
        return (
            <LoginDiv>
                <LoginFormDiv>
                    <Form>
                        <FormGroup>
                            <LabelStylingDiv><Label for="username">Username</Label></LabelStylingDiv>
                            <Input type="username" name="username" placeholder="Enter username..." />
                        </FormGroup>

                        <FormGroup>
                            <LabelStylingDiv><Label for="password">Password</Label></LabelStylingDiv>
                            <Input type="password" name="password" placeholder="Enter password..." />
                        </FormGroup>

                        <Button>Login</Button>
                    </Form>

                </LoginFormDiv>
            </LoginDiv>
        );
    }
}

export default LoginPage;