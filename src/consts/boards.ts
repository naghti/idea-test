import ImageSmile from "../assets/icons/bxs_smile.svg"
import ImageHappy from "../assets/icons/bxs_happy-alt.svg"
import ImageUsideDown from "../assets/icons/bxs_upside-down.svg"
import ImageGhost from "../assets/icons/bxs_ghost.svg"

import { BoardI } from "@/types/board";

export const Boards:  BoardI[] = [
  {
    name: "To Do",
    type: "todo",
    image: ImageSmile,
    addButton: true,
    basketButton: false
  },
  {
    name: "In Progress",
    type: "in_progress",
    image: ImageHappy,
    addButton: false,
    basketButton: false
  },
  {
    name: "Review",
    type: "review",
    image: ImageUsideDown,
    addButton: false,
    basketButton: false
  },
  {
    name: "Done",
    type: "done",
    image: ImageGhost,
    addButton: false,
    basketButton: true
  },
]