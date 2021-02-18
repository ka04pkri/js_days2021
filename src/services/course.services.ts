import { courseListMock } from './../constants/mock/courses';
import { CourseDetail, CourseDetailVM } from '../types'
import { Store } from '../store'
import { mapCourseDetailVMToCourseDetail } from './courseMapper'
import { makeFakeRequest } from '../helpers'

export const fetchCourse = async (
  store: Store,
  selectedCourseId: number
): Promise<void> => {  // TODO: type any
  
  store.mergeGlobalState({
    isLoading: true
  })

  const course: CourseDetailVM = await makeFakeRequest(courseListMock.find(c => c.id === selectedCourseId))

  store.mergeGlobalState({
    selectedCourse: mapCourseDetailVMToCourseDetail(course) 
  })

  store.mergeGlobalState({
    isLoading: false
  })
}

export const updateCourse = async (
  store: Store,
  updatedCourse: CourseDetail
): Promise<void> => {  // TODO: type any
  
  store.mergeGlobalState({
    isLoading: true
  })

  // ...make API request

  store.mergeGlobalState({
    selectedCourse: updatedCourse 
  })

  store.mergeGlobalState({
    isLoading: false
  })
}
