import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../Routes'
import { Button } from '../../sharedComponents'

import logo from '../../assets/logo512.png'
import './home.scss'

const HomePage: React.FC = () => {
  return (
    <>
      <img src={logo} alt="React" className="app-logo" />
      <h1>Kurzy Onlnine</h1>
      <Link to={ROUTES.courseList.getLink()}>
        <Button primmary type="button">
          Dostupné kurzy
        </Button>
      </Link>
    </>
  )
}

export default HomePage