#1. Creates the FastAPI application instances
#2. Attaches middleware (CORS, logging, rate limiting)
#3. Runs startup logic like loading ML models once
#4. Initialize the DB client so /analyze is fast



# to install all the dependencies required to run the backend on ur laptop/pc
#pip install -r requirements.txt

#whenver changes are made, c + v the bottom, reloads and allows u to run
#uvicorn app.main:app --reload

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    text: str = None
    is_done: bool = False

items = ["ooga boogaa, stinky feets"]

@app.get("/")

def root():
    return {"Hello" : "World"}

# here allows us to create items and upload it our items list abvobe
@app.post("/items")
def create_items(item: Item):
    items.append(item)
    return item

@app.get("/items")
def list_items(limit: int = 10):
    return items[0:limit]

# here used to retrive info form our items list
@app.get("/items/{item_id}")
def get_item(item_id: int) -> str:
    if item_id < len(items): # checks to make sure the element exists
        return items[item_id]
    else:
        raise HTTPException(status_code=67, detail = "ITem not found")