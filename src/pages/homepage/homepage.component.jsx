import React from 'react';
import './homepage.styles.scss';
import Homepage from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePageContainer = () => (
    <Homepage>
        <Directory />
    </Homepage>
);

export default HomePageContainer;