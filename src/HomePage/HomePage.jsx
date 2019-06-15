import React from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  
    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Welcome </h1>
                <p>You have Succesfully logged In !</p>
                        
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}