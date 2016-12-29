import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'


class SearchBar extends Component{
    constructor(props){
        super(props);
    //sets initial component-level state only
        this.state = {term: ''};

        //the purpose for the two bind lines below is to bind the context of onInputChange's 'this' to the return onChange callback function
        //the right side of the equals sign's 'this' is the instance of the searchbar. it already has a function called 'onInputChange,' but it's saying 'bind that function to 'this', which is search bar, and then replace the existing function with it (right side of =)'...in other words, overwriting the local method.
        //perform this line below whenever the callback has a reference to 'this'
        this.onInputChange = this.onInputChange.bind(this);
        //!!!^^^!!!^^^!!!^^^!!!^^^!!!
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //!!!^^^!!!^^^!!!^^^!!!^^^!!!
    }


    onInputChange(event){
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();
        //fetch weather data in the action creator first.
        this.props.fetchWeather(this.state.term);
        //clear the search input for next time after form submisson
        this.setState({term: ''})
    }


    render(){
        return(
            <form
                onSubmit={this.onFormSubmit}
                className='input-group'>
                <input
                placeholder='Get a five-day forecast in your favorite cities'
                className='form-control'
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className='input-group-button'>
                    <button type = 'submit'
                        className='btn btn-secondary'>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

//passing null as first argument is just saying 'we dont need state there at the first arg'
export default connect(null, mapDispatchToProps)(SearchBar);
