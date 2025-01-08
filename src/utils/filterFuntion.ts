import { useAppSelector } from "@/hooks/redux";
import { TaskI } from "@/types/task";
import { formatDateStr } from "./formDate";

function filterFunction (data: TaskI) {
  const {filter} = useAppSelector(state => state.fitlerReducer)
  if (filter === "") return true
  
  const dataCheck = formatDateStr(data.endDay) == filter || formatDateStr(data.startDay) == filter
  const textCheck = data.text.toLowerCase().includes(filter.toLowerCase())

  return dataCheck || textCheck
}

export default filterFunction