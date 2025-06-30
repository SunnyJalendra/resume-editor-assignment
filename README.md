## this is Frotened Part File structure: 

##    Root Folder : Resume_editor --> Frontend Folder And backened Folder
                     
frontend/
├── src/
│   ├── components/         # Reusable components (ResumeEditor, SectionEditor, etc.)
│   ├── App.jsx             # Main app
│   ├── api.js              # Axios API calls to FastAPI backend
│   └── main.jsx            # ReactDOM entry point
├── public/                 # Static assets
├── index.html              # HTML shell
├── package.json
└── vite.config.js
# Resume Editor - Frontend (React + Vite)

This is the frontend for the web-based **Resume Editor** built using **React.js** with **Vite**. It allows users to upload, edit, enhance, and download their resumes. This application interacts with a FastAPI backend to enhance resume sections using mock AI and save user data.

---

## Features

-  **Upload Resume**: Accepts `.pdf` and `.docx` files. Uses mocked content after upload.
- **Edit Resume**: Users can edit fields like name, experience, education, and skills. New entries can be added or removed.
- **Enhance with AI**: Each section includes a button to enhance content. Sends data to the backend via `/ai-enhance`.
-  **Save Resume**: Sends complete JSON resume to backend via `/save-resume`.
-  **Download Resume**: Allows users to download the final resume as a `.json` file.


## 🚀 Getting Started

### Prerequisites : 

- Node.js (v16 or later)
- Backend server running (FastAPI) – see [`/backend`](../backend) folder

### Installation
cd frontend
npm install
## How to run project On local Host : 
    npm run dev
## if does not work then do copy path of index.html file and paste on browser.    
## this is Backend  Part File structure: 
backend/
├── main.py # FastAPI application
├── saved_resume.json # File where resume data is stored
├── venv/ # Python virtual environment (ignore this in Git)
└── pycache/ # Auto-generated Python bytecode files
