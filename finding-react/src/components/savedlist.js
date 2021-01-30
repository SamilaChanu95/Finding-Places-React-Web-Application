import React, { Component } from 'react';
import './savedlist.css';

class SavedList extends Component {
    render() {

        var savedlist = this.props.savedPlaces.map(name => {

            return(    
                    
                <div className="col-sm-12 col-md-12 col-lg-">
                    <div className="alert alert-info" key={name}>
                        <b>{name}</b>
                        <a id="btn-link" href="#" className="btn btn-xs btn-primary pull-right">Click for more info</a>
                    </div>
                </div>     
            )
        });

        return(    
                    
            <ul>
                <label htmlFor="inputPlace" className="col-form-label">Saved Places</label>
                {savedlist}
            </ul>    
        )
        
    }
}

export default SavedList;