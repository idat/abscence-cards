import React from 'react'
import { absenceReasons } from '../data'

export default function Card(props) {
  function formatDate(dateString) {
    if (dateString) {
      const event = new Date(dateString)
      let options = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }

      return event.toLocaleString('sv-SE', options)
    } else {
      return 'Tillsvidare'
    }
  }

  function lookupAbsenceReason(absenceGuid) {
    if (absenceGuid) {
      const reason = absenceReasons.find(element => element.guid === absenceGuid)

      return reason.id
    } else {
      return ''
    }
  }

  return (
    <div className='card'>
      <div className='card--content'>
        <h4>{props.item.firstName} {props.item.lastName}</h4>
        <span className='card--data'>{formatDate(props.item.dateTimeFrom)} - {formatDate(props.item.dateTimeTo)}</span>
        <span className='card--data'>{lookupAbsenceReason(props.item.reasonGuid)}</span>
      </div>
    </div>
  )
}
