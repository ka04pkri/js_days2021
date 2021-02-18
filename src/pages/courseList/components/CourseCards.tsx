import React from 'react'
import { ROUTES } from '../../../Routes'
import { Button } from '../../../sharedComponents'
import { Course, CourseList } from '../../../types'

import "./course-cards.scss"

type Props = {
  courseList: CourseList
}

export const CourseCards: React.FC<Props> = (props) => {
  
  const cards = props.courseList
    .map((course: Course) => (
      <div className="course-card" key={course.id}>
        <div>
          <h2>{course.courseName}</h2>
          <div>
            <p>{`${course.date.getDay()}.${course.date.getMonth()}. ${course.date.getFullYear()}`}</p>
            <p><strong>{course.organizerFirstName} {course.organizerLastName}</strong></p>
            <p className="course-venue">{course.venue}</p>
          </div>
        </div>
        <Button to={ROUTES.courseDetail.getLink(course.id)}>Detail kurzu</Button>
      </div>
    ))

  return <>{cards}</>
}
