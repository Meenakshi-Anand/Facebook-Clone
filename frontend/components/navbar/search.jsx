import React from 'react';
import SearchIndexItem from './search_item';

 class Search extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       query: ""
     };
      this.sendQuery = this.sendQuery.bind(this);
      this.update = this.update.bind(this);
   }

   update(e) {
     this.setState({ query: e.currentTarget.value }, () => {
     this.sendQuery();});
   }

   sendQuery(){
     this.props.search(this.state.query);
   }


  render(){
    let searchResults = [];
    console.log(this.props.searchResults);
    if (this.props.searchResults.length > 0) {
      searchResults = this.props.searchResults.map((userId, idx) => {
        return (<SearchIndexItem clearSearchResults={this.clearAll}
          user={this.props.users[userId]}
          key={idx} />);
      });
    }
    return (
      <div>
      <input className="text" type="text" value={this.state.search}
      onChange={this.update} placeholder="Search Users"/>
      <i className="fas fa-search"></i>
      <div className='searchResults'>
          {searchResults}
      </div>
      </div>
    );
  }
}
export default Search;
