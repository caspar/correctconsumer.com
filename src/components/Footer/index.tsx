import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2021</NoWrap> <NoWrap>Correct Consumer</NoWrap>
            </Info>
        </Container>
    );
};
