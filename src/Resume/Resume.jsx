import * as React from 'react';
import './Resume.scss';

const resume = require('../assets/francesca_resume_programming.pdf');
const googleLinkToResume = `https://drive.google.com/file/d/1VCtMJj5s4oJWQipxpFMlg30ebuv8Eq3d/view?usp=sharing`;
const embeddedGoogleLinkToResume = `https://drive.google.com/file/d/1VCtMJj5s4oJWQipxpFMlg30ebuv8Eq3d/preview`;
class Resume extends React.Component {
  render() {
    return (
      <object
        className="full-bleed below-header resume-object"
        data={resume}
        type="application/pdf"
      >
        <iframe
          title="resume"
          width={window.innerWidth}
          height={window.innerHeight - 45}
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
