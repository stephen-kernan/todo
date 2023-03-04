from sqlalchemy import select, delete
from models import Task

from session import session

def fetch_single_task_by_id(task_id: int):
    return session.execute(
        select(Task).where(Task.id == task_id)
    ).scalars().first()

def fetch_all_tasks():
    return session.execute(
        select(Task)
    ).scalars().all()

def delete_task_by_id(task_id: int):
    return session.execute(
        delete(Task).where(Task.id == task_id)
    )