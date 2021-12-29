import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import Summary from './components/Summary';
import './App.css';
import Experience from './components/Experience';
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
            summary: {
                edit: false,
                text: "Role, with a love for an attribute of my job. Experienced in these niches. Fluent with or aware of these methods/skills.",
            }
        }
        // Bind eventhandler functions
        this.inputChange = this.inputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
                summary: {
                    ...this.state.summary,
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

    handleClickSum = (e) => {
        this.setState({
            summary: {
                ...this.state.summary,
                edit: true,
            },
        })
}

    inputChange = (val, e) => {
        if (val == "general") {
            const { name, value } = e.target;
            this.setState({
                general: {
                    ...this.state.general,
                    [name]: value,
                }
            })
        }
        if (val == "summary") {
            const { name, value } = e.target;
            this.setState({
                summary: {
                    ...this.state.summary,
                    [name]: value,
                }
            })

        }
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
                    <div className='SummaryContainer'>
                        <hr />
                        <h4>SUMMARY</h4>
                        <hr />
                        <Summary 
                        summary={this.state.summary}
                        handleClick={this.handleClickSum}
                        inputChange={this.inputChange}
                        handleKeyDown={this.handleKeyDown}
                        />
                    </div>

                    <div className='ExpContainer'>
                        <Experience 
                        // summary={this.state.summary}
                        // handleClick={this.handleClickSum}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
