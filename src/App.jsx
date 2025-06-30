
import { useState } from 'react';
import ResumeUploader from './Components/ResumeUploader';
import ResumeEditor from './Components/ResumeEditor';
import SaveAndDownload from './Components/SaveAndDownload';

function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="container">
      <h1>Resume Editor</h1>

      {!resumeData && <ResumeUploader onUpload={setResumeData} />}

      {resumeData && (
        <><ResumeEditor
          resumeData={resumeData}
          setResumeData={setResumeData} />
          <SaveAndDownload resumeData={resumeData} />
        </>


      )}
    </div>
  );
}

export default App;

