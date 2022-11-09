import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';
import Head from 'next/head';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Sir Philip NON governmental Organization" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer/>
        </>
    )
}