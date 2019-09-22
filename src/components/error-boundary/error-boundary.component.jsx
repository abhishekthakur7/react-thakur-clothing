import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    //catches any error thrown by children components
    static getDerivedStateFromError(error) {
        //process the error
        return { hasErrored: true };
    }

    //catches any error and info related to error thrown by children
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
                    <ErrorImageText>A Dog Ate this Page</ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;