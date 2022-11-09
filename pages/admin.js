import React from 'react';
import styled from 'styled-components';
import { Layout } from '../layout/layout';
import IntegrateGallery from '../components/Pages/IntegrateGallery';

const AdminPage = () => {
    return (
        <div>
            <IntegrateGallery/>
        </div>
    )
}

export default AdminPage;

AdminPage.getLayout = function getLayout(content) {
    return (
        <Layout>
            <div>{content}</div>
        </Layout>
    )
}