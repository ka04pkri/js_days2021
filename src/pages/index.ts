import React from 'react'

export const Pages = {
  Home: React.lazy(() => import('./home/Home.page')),
  CourseList: React.lazy(() => import('./courseList/CourseList.page')),
  CourseDetail: React.lazy(() => import('./courseDetail/CourseDetail.page')),
}
