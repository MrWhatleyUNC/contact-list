import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { idNumber: props.match.params.number });

  return (
    <div>
      <h1>{contact.name} </h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone Number: {contact.phoneNumber}</h2>
      
      <Link to='/'>Back to Contact List</Link>
    </div>
  )
}

export default Contact
