from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

connection_string = "postgresql://postgres:postgres@postgres:5432/todo"
engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)

