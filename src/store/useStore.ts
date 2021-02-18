import { CourseList, CourseDetail } from './../types/modelTypes';
import { useEffect, useState } from 'react'

export type Store = {
    globalState: GlobalState
    mergeGlobalState: (newGlobalState: Partial<GlobalState>) => void
}

export type GlobalState = {
    isLoading: boolean
    courseList: CourseList
    selectedCourse: CourseDetail | null
} 

// let globalState: GlobalState = {
//     isLoading: false,
//     courseList: [],
//     selectedCourse: null,
// }

let listeners: React.Dispatch<React.SetStateAction<{}>>[] = []


function mergeGlobalState(newGlobalState: Partial<GlobalState>) {
    store.globalState = { ...store.globalState, ...newGlobalState  }
    listeners.forEach(listener => listener({}))
}
const store: Store = {
    globalState: {
        isLoading: false,
        courseList: [],
        selectedCourse: null,
    },
    mergeGlobalState
}

export function useStore(): Store {
    const setState = useState<{}>({})[1]

    useEffect(() => {
        listeners.push(setState)

        return () => {
            listeners = listeners.filter(listener => listener !== setState)
        }
    }, [setState])

    return store
}