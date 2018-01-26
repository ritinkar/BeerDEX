import React from 'react';

const Footer = () => {

    return (
        <div style={styles.MainContainer}>
            <div style={styles.TextContainer}>
                <h1>There is no such thing as a bad beer. It’s that some taste better than others.</h1>
            </div>
        </div>
    )
}

const styles = {
    MainContainer: {
        height: 200,
        backgroundColor: '#2b2b2b',
        display: 'flex',
        alignItems: 'center'
    },
    TextContainer: {
        textAlign: 'center',
        color: '#f9f9f9',
        flex: 1
    }

}

export default Footer;