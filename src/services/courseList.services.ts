import { Store } from '../store';
import { CourseListVM } from '../types'
import { mapCourseVMToCourse } from './courseMapper'
import { makeFakeRequest } from '../helpers'
import { courseListMock } from '../constants/mock/courses'

export const fetchCourseList = async (store: Store): Promise<void> => {
  store.mergeGlobalState({
    isLoading: true
  })

  const courses: CourseListVM = await makeFakeRequest(courseListMock)

  store.mergeGlobalState({
    courseList: courses.map(course => mapCourseVMToCourse(course)) 
  })

  store.mergeGlobalState({
    isLoading: false
  })
}
