from models import Task, TaskStruct
from sqlalchemy import select

from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from queries.tasks import fetch_single_task_by_id, fetch_all_tasks

from session import session

task_router = APIRouter(
  prefix="/tasks",
  tags=["tasks"]
)

@task_router.get("/")
def get_tasks():
    try:
        result = fetch_all_tasks()

        return JSONResponse(jsonable_encoder(result))
    
    except Exception as e:
        print("Exception: ", e)

@task_router.get("/task/{task_id}")
def get_task_by_id(task_id: int):
    try:
        result = fetch_single_task_by_id(task_id)

        return JSONResponse(jsonable_encoder(result))

    except Exception as e:
        print(e)

@task_router.post("/task")
def create_new_task(task_request: TaskStruct):
    task = Task(
        **task_request.__dict__
    )

    session.add(task)
    session.commit()

    new_task = session.execute(
        select(Task).where(Task.id == task.id)
    ).scalars().first()

    return JSONResponse(jsonable_encoder(new_task))
    
@task_router.put("/task/{task_id}")
def create_new_task(task_id: int, task_request: TaskStruct):
    print(task_id)
    print(type(task_id))
    task = fetch_single_task_by_id(task_id)

    for k, v in task_request.__dict__.items():
        if v != None:
            setattr(task, k, v)
    
    session.commit()

    updated_task = fetch_single_task_by_id(task_id)
    
    return JSONResponse(jsonable_encoder(updated_task))