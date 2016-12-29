import React, {Component} from 'react';


export default class SearchBar extends Component{
    constructor(props){
        super(props);
    //sets initial component-level state only
        this.state = {term: ''};

        //the purpose for the line below is to bind the context of onInputChange's 'this' to the return onChange callback function
        //the right side of the equals sign's 'this' is the instance of the searchbar. it already has a function called 'onInputChange,' but it's saying 'bind that function to 'this', which is search bar, and then replace the existing function with it (right side of =)'...in other words, overwriting the local method.
        //perform this line below whenever the callback has a reference to 'this'
        this.onInputChange = this.onInputChange.bind(this);
        //!!!^^^!!!^^^!!!^^^!!!^^^!!!
    }


    onInputChange(event){
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();
        //fetch weather data. format:
        // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
        
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
