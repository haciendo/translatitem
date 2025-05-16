from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslateRequest(BaseModel):
    text: str

@app.post("/translate")
def translate(req: TranslateRequest):
    prompt = "translate to italian " + req.text

    api_key = os.getenv("OPENAI_API_KEY")
    print(f"OPENAI_API_KEY: {api_key}")

    client = OpenAI(
        api_key=api_key
    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # Or another OpenAI model you prefer
        messages=[
            {"role": "system", "content": "You are a helpful translation assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    translation = response.choices[0].message.content.strip()
    return {"translated": translation}

@app.get("/")
def read_root():
    return {"Hello": "World"}
