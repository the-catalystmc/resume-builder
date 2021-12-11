//name, email, phone number
import React from 'react';

class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='GeneralContainer'>
                <h2 className='Name' onClick={this.props.handleClick}>{this.props.general.full_name}</h2>
                <h3 className='Role'>{`${this.props.general.current_role}`}</h3>
                <p className='Contact'>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
                {/* <div className='ContactInfo'>
                    <p className='Email'>{this.props.general.first_name}</p>
                    <p className='LinkedIn'>{this.props.general.first_name}</p>
                    <p className='Phone'>{this.props.general.first_name}</p>
                </div> */}
            </div>
        )
    }
}

export default General;