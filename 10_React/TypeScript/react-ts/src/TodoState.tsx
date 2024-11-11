import React from "react";
import { Todo } from "./types";

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
    (null);