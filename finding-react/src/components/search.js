import React, { Component } from 'react';
import Results from './results';
import axios from 'axios'; 

class Search extends Component {

    getKey(e) {
        e.preventDefault();
        const keyTyped = this.refs.textInput.value;
        const update = this.props; // passing the variable from App.js

        // Make a post request for the data 
        axios.post('http://localhost:3001/getlocations', {
            city: keyTyped
          }) // get the response
          .then(function (response) {
            //console.log(response);
            update.callUpdate(response.data.data.results); // If response coming from node server then call the updateState by callUpdate method
          }) // But this function in App.js file 
          .catch(function (error) {
            console.log(error);
          });
        

        //AIzaSyB4jklgCINIdPecftiKbcuCYV2bqS4WTsg
    }


    render() {
        return(
            <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="inputPlace" className="col-form-label">Place</label>
                <input spellCheck="false" type="text" className="form-control" id="inputPlace" placeholder="Enter place here..." ref="textInput" />  
                <button type="submit" onClick={this.getKey.bind(this)} className="btn btn-primary btn-sm" id="submit-btn">Submit</button>  
                <Results resultplaces={this.props.resultPlaces} saveList={this.props.saveList}/>     
            </div>
        );
    }
}

export default Search;