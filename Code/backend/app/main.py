#1. Creates the FastAPI application instances
#2. Attaches middleware (CORS, logging, rate limiting)
#3. Runs startup logic like loading ML models once
#4. Initialize the DB client so /analyze is fast

# to run the back
#pip install -r requirements.txt

#uvicorn app.main:app --reload

from fastapi import FastAPI

app = FastAPI()

@app.get("/")

def root():
    return {"Hello" : "World"}

