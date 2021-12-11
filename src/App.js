import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import './App.css';
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            general: {
                edit: false,
                full_name: 'Rhyine Stewart',
                current_role: 'DEVELOPER',
                phone: '1 876 390-5206',
                email: 'rhyinestewart@gmail.com',
            },
        }
        this.handleClick = this.handleClick.bind(this);
        // Bind eventhandler functions
        // this.inputChange = this.inputChange.bind(this);
        // this.submitClicked = this.submitClicked.bind(this);
        // this.deleteClicked = this.deleteClicked.bind(this);
        // this.updateText = this.updateText.bind(this);
    }

    handleClick = (e) => {
        let edit = this.state.general.edit;
        this.setState({
            general: {
                edit: !edit,
                full_name: this.state.general.full_name,
                current_role: this.state.general.current_role,
                phone: this.state.general.phone,
                email: this.state.general.email,
            },
        })
        console.log(e.target.innerHTML + edit)
    }

    render() {
        return (
            <div className='App-Cont'>
                <div className="App">
                    <General general={this.state.general} handleClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default App;
