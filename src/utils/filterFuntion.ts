import { useAppSelector } from "@/hooks/redux";
import { TaskI } from "@/types/task";
import { formatDateStr } from "./formDate";
import { useCallback } from "react";

function filterFunction () {
  const {filter} = useAppSelector(state => state.fitlerReducer)

  const filterF = useCallback((data: TaskI) => {
    if (filter === "") return true    
    const dataCheck = formatDateStr(data.endDay) == filter || formatDateStr(data.startDay) == filter
    const textCheck = data.text.toLowerCase().includes(filter.toLowerCase())
  
    return dataCheck || textCheck
  }, [filter])

  return filterF
}

export default filterFunction