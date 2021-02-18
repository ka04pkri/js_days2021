import { Switch, Route } from 'react-router-dom'
import { Pages } from './pages'

export type CourseDetailUrlParams = {
  selectedCourseId: string
}

export const ROUTES = {
  courseList: {
    route: '/course-list',
    getLink: (): string => {
      return ROUTES.courseList.route
    },
  },
  courseDetail: {
    route: '/course-detail/:selectedCourseId',
    getLink: (id: number): string => {
      return ROUTES.courseDetail.route.replace(':selectedCourseId', id.toString())
    },
  },
}

export const RouterSwitch = (): JSX.Element => (
  <Switch>
    <Route path={ROUTES.courseList.route} component={Pages.CourseList} />
    <Route path={ROUTES.courseDetail.route} component={Pages.CourseDetail} />
    <Route path="/" exact component={Pages.Home} />
    <Route>
      <>404</>
    </Route>
  </Switch>
)
