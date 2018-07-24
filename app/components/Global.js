import React, {Component} from 'react';

import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Gallery from './Gallery/Gallery'

class Global extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            items: []
        }
    }


    search() {
        console.log('searching!!', this.state.query);

        const BASE_URI = 'https://www.googleapis.com/books/v1/volumes?q=';

        fetch(`${BASE_URI}${this.state.query}`, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                let {items} = json;
                this.setState({items});
                console.log(json)

            })
    }

    render() {
        return (
            <div>
                <h2>Book Explorer</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />

                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"/>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <Gallery items={this.state.items}/>

            </div>
        )

    }
}

export default Global;