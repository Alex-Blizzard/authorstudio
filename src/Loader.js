import React from "react";
import { JellyfishSpinner } from "react-spinners-kit";

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return (
            <JellyfishSpinner 
                size={30}
                color="#686769"
                loading={loading}
            />
        );
    }
}