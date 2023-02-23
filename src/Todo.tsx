import React, { FC } from "react";
import { TodoType } from "./types/todo";

// Pick<TodoType, "title" | "userId" | "completed">
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[完了]" : "[未完了]";
  return <div>{`${completedMark} ${title}, ${userId}`}</div>;
};
