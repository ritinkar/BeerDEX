import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => {

    return (
        <Container fluid style={{ height: 200, backgroundColor: 'black' }}>
            <div style={{ textAlign:'center', color: 'white' }}>
                <h1>There is no such thing as a bad beer. It’s that some taste better than others.</h1>
            </div>
        </Container>
    )
}

export default Footer;