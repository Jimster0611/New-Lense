#1. Creates the FastAPI application instances
#2. Attaches middleware (CORS, logging, rate limiting)
#3. Runs startup logic like loading ML models once
#4. Initialize the DB client so /analyze is fast



# to install all the dependencies required to run the backend on ur laptop/pc
#pip install -r requirements.txt

#whenver changes are made, c + v the bottom, reloads and allows u to run
#uvicorn app.main:app --reload

from fastapi import FastAPI

app = FastAPI()

@app.get("/")

def root():
    return {"Hello" : "World"}

