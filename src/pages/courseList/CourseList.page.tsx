import React, { useEffect } from 'react'
import { fetchCourseList } from '../../services'
import { useStore } from '../../store'
import { CourseCards } from './components'

type Props = {
  // Props
}

const CourseList: React.FC<Props> = () => {
  const store = useStore()

  useEffect(() => { console.log("CourseList");
    fetchCourseList(store)

    return (): void => {
      store.mergeGlobalState({
        courseList: []
      })
    }
  }, [store])

  return (
    <>
      <CourseCards courseList={store.globalState.courseList} />
    </>
  )
}

export default CourseList
