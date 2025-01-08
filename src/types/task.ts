type taskTypes = "todo" | "done" | "in_progress" | "review"

export type TaskI = {
  id: number;
  type: taskTypes;
  startDay: number;
  endDay: number;
  text: string;
}
