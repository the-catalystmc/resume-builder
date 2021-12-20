import React from 'react';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state ={summary: this.props.summary};
    }

    render() {
        if(this.props.summary.edit){
            return(
                <input
                type="text-area"
                name="text"
                onChange={(e) => this.props.inputChange("summary", e)}
                value={this.props.summary.text}
                onKeyDown={this.props.handleKeyDown}
              />            
              )
        }

        return (
            <div>
                <p onClick={(e) => this.props.handleClick('summary', e)}> {this.props.summary.text} </p>
            </div>
        )
    }
}

export default Summary;