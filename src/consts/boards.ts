import ImageSmile from "../assets/icons/bxs_smile.svg"
import ImageHappy from "../assets/icons/bxs_happy-alt.svg"
import ImageUsideDown from "../assets/icons/bxs_upside-down.svg"
import ImageGhost from "../assets/icons/bxs_ghost.svg"

import { BoardI } from "@/types/board";

export const Boards:  BoardI[] = [
  {
    name: "To Do",
    type: "todo",
    Image: ImageSmile
  },
  {
    name: "In Progress",
    type: "in_progress",
    Image: ImageHappy
  },
  {
    name: "Review",
    type: "review",
    Image: ImageUsideDown
  },
  {
    name: "Done",
    type: "done",
    Image: ImageGhost
  },
]