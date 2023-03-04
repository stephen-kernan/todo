from sqlite3 import Date
from sqlalchemy import Column, ForeignKey, Integer, String, Table, Boolean, DateTime
from sqlalchemy.orm import declarative_base, relationship

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

task_tags = Table(
  "task_tags",
  Base.metadata,
  Column("tag_id", ForeignKey("tags.id")),
  Column("task_id", ForeignKey("tasks.id")),
)