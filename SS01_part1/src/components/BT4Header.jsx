import React, { Component } from 'react'

export default class BT4Header extends Component {
  render() {
    return (
      <div>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          {/* Font Awesome */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            rel="stylesheet"
          />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          {/* MDB */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
            rel="stylesheet"
          />
        </>
      </div>
    )
  }
}
