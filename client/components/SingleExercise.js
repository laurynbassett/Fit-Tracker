import React, { Fragment } from 'react'

/**
  Check out this video demo: https://youtu.be/19uPqaQVhLc
  Notice how the manual DOM manipulating JS outside of React conflicts with
  React.
 */

export const SingleExercise = props => {
  const { id, name, duration, completed, description } = props.exercise
  return (
    <Fragment>
      <div className="exercise-name">
        <i
          id={`exercise-${id}`}
          className={
            completed
              ? 'toggle-complete fas fa-check-circle'
              : 'toggle-complete far fa-circle'
          }
        />
        <h3>{name}</h3>
        <span>{duration} min</span>
      </div>
      <div>{description}</div>
    </Fragment>
  )
}