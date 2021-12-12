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
                full_name: 'Full Name',
                current_role: 'Current Role',
                phone: 'Phone #',
                email: 'Email Address',
            },
        }
        // Bind eventhandler functions
        this.inputChange = this.inputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        // this.submitClicked = this.submitClicked.bind(this);
        // this.deleteClicked = this.deleteClicked.bind(this);
        // this.updateText = this.updateText.bind(this);
    }

    //Handle changing from input to readonly.
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                general: {
                    ...this.state.general,
                    edit: false,
                },
            })
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                general: {
                    ...this.state.general,
                    edit: false,
                },
            })
        }
    }

    //Handle clicks and inputs for general component
    handleClick = (e) => {
        this.setState({
            general: {
                ...this.state.general,
                edit: e.target.className,
            },
        })
    }

    inputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            general: {
                ...this.state.general,
                [name]: value,
            }
        })
    }

    render() {
        return (
            <div className='App-Cont'>
                <div className="App">
                    <div ref={this.setWrapperRef}>
                        <General
                            general={this.state.general}
                            handleClick={this.handleClick}
                            inputChange={this.inputChange}
                            handleKeyDown={this.handleKeyDown}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
