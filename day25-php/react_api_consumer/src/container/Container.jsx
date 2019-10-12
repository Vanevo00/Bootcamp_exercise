import React from 'react';
import Groupmenu from '../groupmenu/Groupmenu.jsx';
import Menu from '../menu/Menu.jsx';
import Message from '../message/Message.jsx';
import Exercise from '../exercises/Exercise.jsx';
import * as exercises from '../exercises';
import urls from '../urls.js';

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGroup: null,
            activeExercise: null
        };

        this.exercise = React.createRef();
    }

    handleGroupmenuSelect = (key) => {
        this.setState({ 
            activeGroup: key,
            activeExercise: null
        });
    }

    handleMenuSelect = (key) => {
        this.setState({ activeExercise: key });

        if (this.exercise.current) {
            this.exercise.current.reload();
        }
    }

    getGroupmenuItems() {
        let items = [];
        for (let key in exercises) {
            items.push({
                key: key,
                name: exercises[key].name
            })
        }

        return items;
    }

    getMenuItems() {
        let items = []

        if (this.state.activeGroup && typeof(exercises[this.state.activeGroup]) != 'undefined') {
            for (let key in exercises[this.state.activeGroup].names) {
                items.push({
                    key: key,
                    name: exercises[this.state.activeGroup].names[key]
                })
            }
        }

        return items;
    }

    getContent() {
        if (this.state.activeGroup) {
            if (this.state.activeExercise) {
                if (typeof(exercises[this.state.activeGroup].components[this.state.activeExercise]) != 'undefined') {
                    let ExerciseContent = exercises[this.state.activeGroup].components[this.state.activeExercise];
                    let url = null;
                    if (typeof(urls[this.state.activeGroup+'.'+this.state.activeExercise]) != 'undefined') {
                        url = urls[this.state.activeGroup+'.'+this.state.activeExercise];
                    }
                    return (
                        <Exercise 
                            ref={ this.exercise }
                            id={ this.state.activeGroup+'.'+this.state.activeExercise }
                            url={ url }
                            content={ ExerciseContent }
                        />
                    )
                } else {
                    return (
                        <Message
                            type='error'
                            content={ 'Exercise '+this.state.activeGroup+'/'+this.state.activeExercise+' not found.' }
                        />
                    )
                }
            } else {
                return (
                    <Message
                        type='info'
                        content={ 'Select an exercise.' }
                    />
                )
            }
        } else {
            return (
                <Message
                    type='info'
                    content={ 'Select a group.' }
                />
            )
        }            
    }

    render() {

        let content = this.getContent()

        return (
            <>
                <header>
                    <h1>React API Consumer</h1>
                </header>

                <main>
                    <Groupmenu
                        items={ this.getGroupmenuItems() }
                        handleItemClick={ this.handleGroupmenuSelect }
                    />

                    <Menu
                        items={ this.getMenuItems() }
                        handleItemClick={ this.handleMenuSelect }
                    />

                    <div className="content">
                        { content }
                    </div>
                </main>
            </>
        );
    }
}