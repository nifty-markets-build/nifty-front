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
import { connect } from 'react-redux';
import { registerUser } from '../actions';

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
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.registerUser(this.state);
        // this.setState({
        //     username: "",
        //     password: "",
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     address: ""
        // });
        this.props.history.push('/login');
    }

    render() {
        return (
            <RegisterDiv>
                <RegisterFormDiv>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <LabelStylingDiv><Label for="username">Username</Label></LabelStylingDiv>
                            <Input 
                                type="username" 
                                name="username" 
                                placeholder="Enter a username..."
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <LabelStylingDiv><Label for="password">Password</Label></LabelStylingDiv>
                            <Input 
                                type="password" 
                                name="password" 
                                placeholder="Enter a password..."
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <LabelStylingDiv><Label for="firstName">First Name</Label></LabelStylingDiv>
                                    <Input 
                                        type="firstName" 
                                        name="firstName" 
                                        placeholder="Enter your first name..."
                                        onChange={this.changeHandler}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <LabelStylingDiv><Label for="lastName">Last Name</Label></LabelStylingDiv>
                                    <Input 
                                        type="lastName" 
                                        name="lastName" 
                                        placeholder="Enter your last name..."
                                        onChange={this.changeHandler}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <LabelStylingDiv><Label for="email">Email</Label></LabelStylingDiv>
                            <Input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email..."
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <LabelStylingDiv><Label for="address">Address</Label></LabelStylingDiv>
                            <Input 
                                type="address" 
                                name="address" 
                                placeholder="Enter your address..."
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <Button type="submit">Register</Button>
                    </Form>
                </RegisterFormDiv>
            </RegisterDiv>
        );
    }
}

export default connect(null, { registerUser })(SignUpPage);