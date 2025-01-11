export type BoardNames = "To Do" | "In Progress" | "Review" | "Done" 
export type BoardTypes = "todo" | "in_progress" | "review" | "done"

export type BoardI = {
  name: BoardNames;
  type: BoardTypes;
  image: React.VFC<React.SVGProps<SVGSVGElement>>;
  basketButton: boolean;
  addButton: boolean;
}

