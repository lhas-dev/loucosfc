import React from 'react';
import { Button, Hero, HeroBody, Input, Container, Column, Title, Subtitle, Box, Image, Field, Control, } from 'bloomer';
import userImage from '../../assets/user.png';
import { Link } from 'react-router-dom';

const onSubmit = event => {
    event.preventDefault();
    alert('ae');
    return false;
};

const LoginRoute = () => (
    <Hero isColor="light" isFullHeight>
        <HeroBody hasTextAlign="centered">
            <Container className="has-text-centered">
                <Column isSize={4} isOffset={4}>
                    <Title hasTextColor="grey">
                        Loucos F.C.
                    </Title>
                    <Subtitle hasTextColor="grey">
                        Faça login para continuar.
                    </Subtitle>
                    <Box className="box__login">
                        <Image className="avatar" isSize="128x128" src={userImage} />
                        <form onSubmit={onSubmit}>
                            <Field>
                                <Control>
                                    <Input type="email" required placeholder="E-mail" isSize="large" />
                                </Control>
                            </Field>
                            <Field>
                                <Control>
                                    <Input type="password" required minLength="6" placeholder="Senha" isSize="large" />
                                </Control>
                            </Field>
                            <Button type="submit" isSize="large" isColor="info" isFullWidth>Entrar no Loucos</Button>
                        </form>
                    </Box>
                    <p className="login__footer has-text-grey">
                        <Link to="/signup">Cadastro</Link>
                        {/* {" · "} 
                        <Link to="/forgot-password">Esqueci a senha</Link> */}
                    </p>
                </Column>
            </Container>
        </HeroBody>
    </Hero >
);

export default LoginRoute;
