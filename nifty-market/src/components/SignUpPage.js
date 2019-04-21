import React from 'react';
import styled from 'styled-components';
import {
    Row,
    Col,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    Button
} from 'reactstrap';

import haloHero from '../images/haloHero.jpg';

const RegisterDiv = styled.div`
    height: 800px;
    background-image: url(${haloHero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: right-align;
`;

const RegisterFormDiv = styled.div`
    margin-top: 120px;
    margin-left: 60%;
    width: 400px;
`;

const LabelStylingDiv = styled.div`
    color: white;
    font-size: 1.2rem;
`;

class SignUpPage extends React.Component {
    render() {
        return (
            <RegisterDiv>
                <RegisterFormDiv>
                    <Form>
                        <FormGroup>
                            <LabelStylingDiv><Label for="username">Username</Label></LabelStylingDiv>
                            <Input type="username" name="username" placeholder="Enter a username..." />
                        </FormGroup>

                        <FormGroup>
                            <LabelStylingDiv><Label for="password">Password</Label></LabelStylingDiv>
                            <Input type="password" name="password" placeholder="Enter a password..." />
                        </FormGroup>

                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <LabelStylingDiv><Label for="firstName">First Name</Label></LabelStylingDiv>
                                    <Input type="firstName" name="firstName" placeholder="Enter your first name..." />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <LabelStylingDiv><Label for="lastName">Last Name</Label></LabelStylingDiv>
                                    <Input type="lastName" name="lastName" placeholder="Enter your last name..." />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <LabelStylingDiv><Label for="email">Email</Label></LabelStylingDiv>
                            <Input type="email" name="email" placeholder="Enter your email..." />
                        </FormGroup>

                        <FormGroup>
                            <LabelStylingDiv><Label for="address">Address</Label></LabelStylingDiv>
                            <Input type="address" name="address" placeholder="Enter your address..." />
                        </FormGroup>

                        <Button>Register</Button>
                    </Form>
                </RegisterFormDiv>
            </RegisterDiv>
        );
    }
}

export default SignUpPage;