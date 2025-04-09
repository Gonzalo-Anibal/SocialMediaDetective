from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import message


from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="New API",
)

origins = [
    "http://localhost:3000",  # React app
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(message.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}