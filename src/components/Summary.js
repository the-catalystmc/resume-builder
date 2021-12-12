import React from 'react';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state ={summary: this.props.summary};
    }

    render() {
        return (
            <div>
                <p> {this.props.summary} </p>
            </div>
        )
    }
}

export default Summary;