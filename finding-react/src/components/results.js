import React, { Component } from 'react';
import './resultlist.css';

class Results extends Component {
    render() {

    if (this.props.resultplaces !== undefined)
    {
        var placeList = this.props.resultplaces.map(name => {
            
            return (
                <div id="container" className="col-sm-12 col-md-12 col-lg-12" key={name.id}>
                <div className="list-group">
                    <div className="list-group-item clearfix">
                        <div className="profile-teaser-left">
                            <div className="profile-img">
                                <img src={name.icon} alt="place icon" />
                            </div>
                        </div>
                        <div className="profile-teaser-main">
                            <h2 className="profile-name"> {name.name} </h2>
                            <div className="profile-info">
                                <div className="info"><span className="">Address</span> {name.formatted_address} </div>
                                <div className="info"><button className="btn btn-primary" onClick={() => this.props.saveList(name.name)}>Save Place</button></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
            
        });
    }

        return( 
            console.log("Result successfullly returned."),        
            <ul id="placesList">
                {placeList}
            </ul>      
        );
    }
}

export default Results;