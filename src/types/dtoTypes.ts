export type CourseListVM = CourseVM[]

export type CourseIM = {
  id: number
  date: Date
  email: string
  venue: string
  courseName: string
  organizer_last_name: string
  organizer_first_name: string
}

export type CourseVM = {
  id: number
  date: Date
  venue: string
  courseName: string
  organizer_last_name: string
  organizer_first_name: string
}

export type CourseDetailVM = {
  id: number
  date: Date
  email: string
  venue: string
  courseName: string
  organizer_last_name: string
  organizer_first_name: string
}
