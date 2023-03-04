import React from "react";

import { TaskCardGroup } from "../TaskCards/TaskCardGroup";
import { EmptyList } from "../EmptyList/EmptyList";

export const IncompleteTaskView = ({ tasks = [], toggleCompleted }) => {
  if (!tasks.length) return <EmptyList />;

  const groupedTasks = tasks.reduce(
    (reducer, task) => ({
      ...reducer,
      [task.due_date]: reducer[task.due_date]?.length
        ? [...reducer[task.due_date], task]
        : [task],
    }),
    {}
  );

  return (
    <div>
      {Object.entries(groupedTasks).map(([groupLabel, groupTasks]) => (
        <TaskCardGroup
          key={groupLabel}
          toggleCompleted={toggleCompleted}
          groupLabel={groupLabel}
          tasks={groupTasks}
        />
      ))}
    </div>
  );
};
