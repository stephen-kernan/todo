import React from "react";

import { TaskCardGroup } from "../TaskCards/TaskCardGroup";
import { EmptyList } from "../EmptyList/EmptyList";

export const CompleteTaskView = ({ tasks = [], toggleCompleted }) => {
  if (!tasks.length) return <EmptyList />;

  const groupedTasks = tasks.reduce(
    (reducer, task) => ({
      ...reducer,
      [task.completed_on.split("T")[0]]: reducer[
        task.completed_on.split("T")[0]
      ]?.length
        ? [...reducer[task.completed_on.split("T")[0]], task]
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
