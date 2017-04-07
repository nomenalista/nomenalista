import React, { PropTypes } from 'react'

import Navigation from './../components/Navigation'
import Menu from './../components/Menu'

const Layout = ({ children }) => (
    <div>
        <Navigation />
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <Menu />
                </div>
                <div className="col-lg-9">
                    <div className="panel panel-primary">
                      <div className="panel-body">
                        { children }
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
