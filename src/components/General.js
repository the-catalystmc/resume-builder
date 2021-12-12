//name, email, phone number
import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: this.props.general
    }
  }
  render() {
    if (this.props.general.edit === 'Name') {
      return (
        <div className='GeneralContainer'>
          <div className='NameInput'>
            <input
              type="text"
              name="full_name"
              onChange={this.props.inputChange}
              value={this.props.general.full_name}
              onKeyDown={this.props.handleKeyDown}
            // onChange={(e) => {this.setState({general: {...this.state.general, full_name: e.target.value}})}} 
            />
          </div>
          <h3 className='Role' onClick={this.props.handleClick}>{`${this.props.general.current_role}`}</h3>
          <p className='Contact' onClick={this.props.handleClick}>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
        </div>
      )
    }
    if (this.props.general.edit === "Role") {
      return (
        <div className='GeneralContainer'>
          <h2 className='Name' onClick={this.props.handleClick}>{this.props.general.full_name}</h2>
          <div className='RoleInput'>
            <input
              type="text"
              name="current_role"
              onChange={this.props.inputChange}
              value={this.props.general.current_role}
              onKeyDown={this.props.handleKeyDown}
            />
          </div>
          <p className='Contact' onClick={this.props.handleClick}>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
        </div>
      )
    }

    if (this.props.general.edit === `Contact`) {
      return (
        <div className='GeneralContainer'>
          <h2 className='Name' onClick={this.props.handleClick}>{this.props.general.full_name}</h2>
          <h3 className='Role' onClick={this.props.handleClick}>{`${this.props.general.current_role}`}</h3>
          <div className='ContactInput'>
            <input
              type="text"
              name="email"
              onChange={this.props.inputChange}
              value={this.props.general.email}
              onKeyDown={this.props.handleKeyDown}
            />
            <input
              type="text"
              name="phone"
              onChange={this.props.inputChange}
              value={this.props.general.phone}
              onKeyDown={this.props.handleKeyDown}
            />
          </div>
        </div>
      )
    }
    return (
      <div className='GeneralContainer'>
        <h2 className='Name' onClick={this.props.handleClick}>{this.props.general.full_name}</h2>
        <h3 className='Role' onClick={this.props.handleClick}>{this.props.general.current_role}</h3>
        <p className='Contact' onClick={this.props.handleClick}>{`${this.props.general.email} | ${this.props.general.phone}`}</p>
      </div>
    )
  }
}

export default General;