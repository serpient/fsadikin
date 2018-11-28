import * as React from 'react';
import './Resume.css';

const resume = require('../assets/181127_Francesca Sadikin_Resume.pdf');
class Resume extends React.Component {
    render() {
        return (
            <object className="resume-object" data={resume} type="application/pdf">
                <iframe title="resume" className="resume-iframe" data={resume}>
                    This browser does not support PDFs. Please download the PDF to view it:
                        <a href="https://drive.google.com/file/d/1wX8sOqkmVvH8rAoIbLoYQjbjvjNUEJ_y/view?usp=sharing">Download PDF</a>
                </iframe>
            </object>
        )
    }
}

export default Resume;