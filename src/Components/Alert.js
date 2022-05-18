import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type==='Success'?'success':'danger'} alert-dismissible fade show`}>
    <strong>{props.alert.type}</strong> : {props.alert.msg}
   
        </div>
  )
}

