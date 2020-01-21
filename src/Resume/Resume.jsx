import * as React from 'react';
import './Resume.scss';

const resume = require('../assets/francesca_resume_programming.pdf');
const googleLinkToResume = `https://drive.google.com/file/d/1PUusHsL6wfbUARAN4OoGRJccqv2UOCEV/view?usp=sharing`;
const embeddedGoogleLinkToResume = `https://drive.google.com/file/d/1PUusHsL6wfbUARAN4OoGRJccqv2UOCEV/preview`;
class Resume extends React.Component {
  render() {
    return (
      <object className="resume-object" data={resume} type="application/pdf">
        <iframe
          title="resume"
          width={document.documentElement.clientWidth}
          height={document.documentElement.clientHeight - 50}
          className="resume-iframe"
          src={embeddedGoogleLinkToResume}
        >
          This browser does not support PDFs. Please download the PDF to view
          it:
          <a href={googleLinkToResume}>Download PDF</a>
        </iframe>
      </object>
    );
  }
}

export default Resume;
