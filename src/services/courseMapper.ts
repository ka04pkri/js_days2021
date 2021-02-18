import { CourseVM } from './../types/dtoTypes';
import { CourseDetail } from './../types/modelTypes';
import { Course, CourseDetailVM } from '../types';

export function mapCourseDetailVMToCourseDetail(courseVm: CourseDetailVM): CourseDetail {
    return {
        id: courseVm.id,
        date: courseVm.date,
        email: courseVm.email,
        venue: courseVm.venue,
        courseName: courseVm.courseName,
        organizerLastName: courseVm.organizer_last_name,
        organizerFirstName: courseVm.organizer_first_name,
    }
}

export function mapCourseVMToCourse(courseVm: CourseVM): Course {
    return {
        id: courseVm.id,
        date: courseVm.date,
        venue: courseVm.venue,
        courseName: courseVm.courseName,
        organizerLastName: courseVm.organizer_last_name,
        organizerFirstName: courseVm.organizer_first_name,
    }
}