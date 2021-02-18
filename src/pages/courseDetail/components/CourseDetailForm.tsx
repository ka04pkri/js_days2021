import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Input } from '../../../sharedComponents'
import { useStore } from '../../../store'
import { updateCourse } from '../../../services'
import { CourseDetail } from '../../../types'

export const CourseDetailForm: React.FC = () => {
  const store = useStore()
  const { globalState: { selectedCourse } } = store

  if (!selectedCourse) {
    return null
  }

  const initialValues: Partial<CourseDetail> = {
    courseName: selectedCourse.courseName,
    organizerFirstName: selectedCourse.organizerFirstName,
    organizerLastName: selectedCourse.organizerLastName,
    email: selectedCourse.email,
    venue: selectedCourse.venue,
  }

  const schema = Yup.object().shape<Partial<CourseDetail>>({
    organizerFirstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    organizerLastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      // validate={values => {
      //     let errors
      //     if (!values.email) {
      //         errors = { email: 'Required'};
      //     } else if (
      //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //         errors = { email: 'Invalid email address' };
      //     }
      //     return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values)
          
          const updatedCourse: CourseDetail = {
            ...selectedCourse,
            ...values
          }

          updateCourse(store, updatedCourse)
          
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <div style={{ width: 400, margin: "auto" }}>
          <Form>
            <Input<CourseDetail> name="courseName" label="Název kurzu" />
            <Input<CourseDetail> name="organizerFirstName" label="Jméno přednášejícího" />
            <Input<CourseDetail> name="organizerLastName" label="Příjmení přednášejícího" />
            <Input<CourseDetail> name="email" label="Email přednášejícího" />
            <Input<CourseDetail> name="venue" label="Místo konání" />
            <br />
            <Button type="submit" disabled={isSubmitting}>
              Odeslat
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
