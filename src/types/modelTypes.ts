export type CourseDetail = {
  id: number
  date: Date
  email: string
  venue: string
  courseName: string
  organizerLastName: string
  organizerFirstName: string
}

export type Course = {
  id: number
  date: Date
  venue: string
  courseName: string
  organizerLastName: string
  organizerFirstName: string
}

export type CourseList = Course[]
