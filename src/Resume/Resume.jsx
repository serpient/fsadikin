import * as React from 'react';
import './Resume.css';

const resume = require('../assets/181127_2_Francesca Sadikin_Resume.pdf');
const googleLinkToResume = `https://drive.google.com/file/d/19-xyzuNHGXjtiwg1hZuhEEdHOOKBiAvQ/view?usp=sharing`;
const embeddedGoogleLinkToResume = `https://drive.google.com/file/d/19-xyzuNHGXjtiwg1hZuhEEdHOOKBiAvQ/preview`;
class Resume extends React.Component {
    render() {
        return (
            <object className="resume-object" data={resume} type="application/pdf">
                <iframe title="resume" width={document.documentElement.clientWidth} height={document.documentElement.clientHeight - 50} className="resume-iframe" src={embeddedGoogleLinkToResume}>
                    This browser does not support PDFs. Please download the PDF to view it:
                    <a href={googleLinkToResume}>Download PDF</a>
                </iframe>
            </object>
        )
    }
}

export default Resume;