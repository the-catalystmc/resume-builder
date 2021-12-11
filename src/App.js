import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import './App.css';
class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            general: {
                full_name: 'Rhyine Stewart',
                current_role: 'DEVELOPER',
                phone: '1 876 390-5206',
                email: 'rhyinestewart@gmail.com',
                linkedin: 'linkedin.com/rhyine-stewart'
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
        console.log('Element Clicked')
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
