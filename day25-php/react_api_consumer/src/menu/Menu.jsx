import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeExercise: null
        };
    }

    handleItemClick = (ev, slug) => {
        ev.preventDefault();
        return this.props.handleItemClick(slug);
    }

  render() {

    return (
        <nav className="exercises-menu">
            {
                this.props.items.map(item => (
                    <a 
                        key={ item.key }
                        href="#"
                        onClick={ (ev) => this.handleItemClick(ev, item.key) }
                    >
                        { item.name }
                    </a>
                ))
            }
        </nav>
    );
  }
}