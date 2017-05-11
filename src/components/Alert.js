import React from 'react'

export default (msg, classe) => {
  const alertclass = classe ? 'alert alert-' + classe : 'alert alert-warning'

  return (
    <div className={alertclass + ` alert-dismissible`} role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      {msg}
    </div>
  )
}
