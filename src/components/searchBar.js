import React from 'react';

import {Paper, TextField} from '@material-ui/core';
 
class SearchBar extends React.Component {
 state = {
     searchTerm : '',
 }

 handleChange = (event) => {
   
    this.setState({searchTerm : event.target.value})

 }

 handleSubmit = (event) => {
      const {searchTerm} = this.state;
      const {onFormSubmit} = this.props;
    onFormSubmit(searchTerm);

event.preventDefault();
  
 }
render(){
return(
    <Paper elevation= {4} >
        <form onSubmit={this.handleSubmit} style={{padding:'10px'}}>
            <TextField fullWidth label="Search...." variant="outlined" onChange={this.handleChange}/>
        </form>
    </Paper>
)
}
}

export default SearchBar;