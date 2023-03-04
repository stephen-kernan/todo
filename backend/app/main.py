from typing import Union

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from routers.tasks import task_router

app = FastAPI()

app.include_router(task_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*', 'http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthcheck")
def read_root():
    return JSONResponse({"Status": "OK"})
