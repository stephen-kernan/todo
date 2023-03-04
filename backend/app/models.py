from datetime import datetime
from typing import Optional
from sqlalchemy import Column, ForeignKey, Integer, String, Table, Boolean, DateTime
from sqlalchemy.orm import declarative_base, relationship

from pydantic import BaseModel

Base = declarative_base()

class Tag(Base):
  __tablename__ = 'tags'

  id = Column(Integer, primary_key=True)
  name = Column(String)
  

class Task(Base):
  __tablename__ = 'tasks'

  id = Column(Integer, primary_key=True)
  name = Column(String)
  completed = Column(Boolean)
  completed_on = Column(DateTime)
  due_date = Column(DateTime)

class TaskStruct(BaseModel):
  id: Optional[int]
  name: Optional[str]
  completed: Optional[bool]
  completed_on: Optional[datetime]
  due_date: Optional[datetime]

task_tags = Table(
  "task_tags",
  Base.metadata,
  Column("tag_id", ForeignKey("tags.id")),
  Column("task_id", ForeignKey("tasks.id")),
)