//company name, position title, main tasks of your jobs, date from and until when you worked for that company
import React from 'react'

class Experience extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h4>EXPERIENCE</h4>
                <hr />
                <div className='ExpCont'>
                    <div>
                        <p>COMPANY</p>
                        <p><b>Position Title</b></p>
                    </div>
                    <div className='ExpLocation'>
                        <p>Location</p>
                        <p>Time Frame</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;