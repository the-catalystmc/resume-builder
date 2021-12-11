import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
          task: {
            text: '',
            id: uuidv4(),
            num: 1,
          },
          tasks: [],
          edit: false,
        };
    
        // Bind eventhandler functions
        this.inputChange = this.inputChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.updateText = this.updateText.bind(this);
      }
    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
