export interface CourseGoalItemProps {
    id: string
    onDelete(goalId: string): void
    children: any
}

export interface CourseGoal {
    text: string
    id: string
}

export interface CourseGoalListProps {
    items: Array<CourseGoal>
    onDeleteItem(goalId: string): void
}

export interface CourseGoalInputProps {
    onAddGoal(goalId: string): void
}

