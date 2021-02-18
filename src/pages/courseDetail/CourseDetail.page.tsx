import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { CourseDetailUrlParams } from '../../Routes'
import { CourseDetailForm } from './components'
import { fetchCourse } from '../../services'
import { useStore } from '../../store'

const CourseDetail: React.FC = () => {
  const { selectedCourseId } = useParams<CourseDetailUrlParams>()
  const store = useStore()

  useEffect(() => {
    fetchCourse(store, Number(selectedCourseId))

    return (): void => {
      store.mergeGlobalState({
        selectedCourse: null
      })
    }
  }, [selectedCourseId, store])


  return (
    <div>
      <h1>Kurz: {store.globalState.selectedCourse?.courseName}</h1>
      <CourseDetailForm />
    </div>
  )
}

export default CourseDetail
