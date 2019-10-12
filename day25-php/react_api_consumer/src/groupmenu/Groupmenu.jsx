import React from 'react';

export default class Groupmenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGroup: null
        };
    }

    handleItemClick = (ev, slug) => {
        ev.preventDefault();
        return this.props.handleItemClick(slug);
    }

    render() {

        return (
            <nav className="group-menu">
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