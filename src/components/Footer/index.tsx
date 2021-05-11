import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2021</NoWrap>{' '}
                <NoWrap>
                    Correct Consumer &mdash; Caspar Lant, Shaun Maher, Dennis
                    Shasha
                </NoWrap>
            </Info>
        </Container>
    );
};
