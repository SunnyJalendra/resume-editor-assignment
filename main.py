
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Enable React frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input model
class EnhanceRequest(BaseModel):
    section: str
    content: str

# Endpoint to enhance resume sections
@app.post("/ai-enhance")
def enhance(req: EnhanceRequest):
    return {"enhanced": f"✨ Improved version of: {req.content}"}

# Endpoint to save resume JSON
@app.post("/save-resume")
def save_resume(resume: dict):
    with open("saved_resume.json", "w") as f:
        json.dump(resume, f, indent=2)
    return {"message": "Resume saved successfully"}
