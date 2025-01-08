import {useEffect, useState} from 'react';
import "./global.css"
import Header from '@/modules/Header';
import Board from '@/modules/Board';
import { Boards } from '@/consts/boards';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { taskSLice } from '@/store/reducers/TaskSlice';
import { tasksTemplate } from '@/consts/tasks';
import { TaskI } from '@/types/task';
import { useSetTasks } from '@/hooks/TaskHelpers';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const App = () => {
  useSetTasks()
  return (
    <div className="bg-main-background min-w-full min-h-screen bg-cover bg-center">
      <div className="py-14 px-10">
        <Header/>

        <div className="grid grid-flow-col gap-10">
          {Boards.map((board, index) => (
            <Board data={board} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

