import React from 'react'
import withSimpleErrorBoundary from '../../util/withSimpleErrorBoundary'
import styled from 'styled-components'

const ExerciseSummaryWrapper = styled.div`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
`

const ExerciseSummary = ({ exercise, index, quizIdToTitle }) => {
  let description = 'Tuntematon tehtävätyyppi'
  if (exercise.type === 'quiznator') {
    description = `Kysely: ${quizIdToTitle[exercise.id]}`
  }
  if (exercise.type === 'programming-exercise') {
    description = `Ohjelmointitehtävä: ${exercise.id}`
  }
  return (
    <ExerciseSummaryWrapper>
      {index + 1}. {description}
    </ExerciseSummaryWrapper>
  )
}

export default withSimpleErrorBoundary(ExerciseSummary)
