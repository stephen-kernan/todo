"""initialize-tables

Revision ID: b68bd83effb4
Revises: 
Create Date: 2023-02-28 23:01:04.694694

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b68bd83effb4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('tags',
        sa.Column('id', sa.Integer(), nullable=False, primary_key=True),
        sa.Column('name', sa.String(), nullable=True),
    )
    op.create_table('tasks',
        sa.Column('id', sa.Integer(), nullable=False, primary_key=True),
        sa.Column('name', sa.String(), nullable=True),
        sa.Column('completed', sa.Boolean(), default=False),
        sa.Column('completed_on', sa.DateTime()),
        sa.Column('due_date', sa.DateTime()),
    )

    op.create_table('task_tags',
        sa.Column('tag_id', sa.Integer(), nullable=False),
        sa.Column('task_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
        sa.ForeignKeyConstraint(['task_id'], ['tasks.id'], ),
        sa.PrimaryKeyConstraint('tag_id', 'task_id')
    )


def downgrade():
    op.drop_table('task_tags')
    op.drop_table('tags')
    op.drop_table('tasks')
