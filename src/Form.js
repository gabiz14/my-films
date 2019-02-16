import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            genre: '',
            year: '',
            review: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, genre, year, review } = this.state;

        return (
            <form>
                <div className="labelHolder">
                    <label>Name</label>
                </div>
                <div className="inputHolder">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange} />
                </div>
                <div className="labelHolder">
                    <label>Genre</label>
                </div>
                <div className="inputHolder">
                    <select
                        name="genre"
                        value="{genre}"
                        onChange={this.handleChange}>
                        <option>Sci-Fi</option>
                        <option>Action</option>
                        <option>Thriller</option>
                        <option>Kids</option>
                    </select>
                </div>
                <div className="labelHolder">
                    <label>Year</label>
                </div>
                <div className="inputHolder">
                    <input
                        type="number"
                        name="year"
                        value={year}
                        onChange={this.handleChange} />
                </div>
                <div className="labelHolder">
                    <label>Review</label>
                </div>
                <div className="inputHolder">
                    <textarea
                        rows="4"
                        cols="50"
                        name="review"
                        value={review}
                        onChange={this.handleChange} />
                </div>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }

}
export default Form;