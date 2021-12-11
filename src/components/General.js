//name, email, phone number
import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    if (!this.props.general.edit) {
      return (
        <div className='GeneralContainer'>
          <h2 className='Name' onClick={this.props.handleClick}>{this.props.general.full_name}</h2>
          <h3 className='Role' onClick={this.props.handleClick}>{`${this.props.general.current_role}`}</h3>
          <p className='Contact' onClick={this.props.handleClick}>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
        </div>
      )
    }
    if (this.props.general.edit === this.props.general.full_name){
      return (
        <div className='GeneralContainer'>
          <div className='NameInput'>
            <input value={this.props.general.full_name} />
          </div>
          <h3 className='Role' onClick={this.props.handleClick}>{`${this.props.general.current_role}`}</h3>
          <p className='Contact' onClick={this.props.handleClick}>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
          {/* <div className='RoleInput'>
            <input value={this.props.general.current_role} />
          </div>
          <div className='ContactInput'>
            <input value={this.props.general.email} />
            <input value={this.props.general.phone} />
          </div> */}
        </div>
      )
    }
    return(
      <div>Hello</div>
    )
  }
}

export default General;