import React from 'react'

export const Alert = (msg, classe) => {
    let alertclass = (classe) ? 'alert alert-' + classe : 'alert alert-warning';

    return (
        <div className={ alertclass + ` alert-dismissible`} role="alert">
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            { msg }
        </div>
    )
}

export const Loader = () => {
    return (
        <div>
            <img src="/images/ajax-loader.gif" alt="loader" /><br />
        </div>
    )
}
