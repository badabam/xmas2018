import React, { Component } from 'react'
import './Door.css'

export default class Door extends Component {
  render() {
    const { text, num, total, isOpen, onClick } = this.props
    const today = new Date().getDate()
    return (
      <section
        onClick={num <= today ? onClick : undefined}
        className={isOpen ? 'Door open' : 'Door'}
      >
        {isOpen ? text : `${num}/${total}`}
      </section>
    )
  }
}
