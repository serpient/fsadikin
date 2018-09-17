import * as React from 'react';
import './Resume.css';

class Resume extends React.Component {
    render() {
        return (
            <object className="resume-object" data={require('../assets/180914_Francesca Sadikin_Resume.pdf')} type="application/pdf">
                <iframe className="resume-iframe" data={require('../assets/180914_Francesca Sadikin_Resume.pdf')}>
                    This browser does not support PDFs. Please download the PDF to view it:
                        <a href="https://drive.google.com/file/d/1R7iZWnmW7NXnlAHxMNBuQFt7584qowP3/view?usp=sharing">Download PDF</a>
                </iframe>
            </object>
        )
    }
}

export default Resume;