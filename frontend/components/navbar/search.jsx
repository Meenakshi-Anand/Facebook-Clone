
import React from 'react';
import SearchIndexItem from './search_item';

 class Search extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       query: "."
     };
      this.sendQuery = this.sendQuery.bind(this);
      this.update = this.update.bind(this);
   }

   componentDidMount(){
     this.props.search(this.state.query);
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
    if (this.props.searchResults === undefined) {
      searchResults = [];
    }else {
      searchResults = this.props.searchResults.map((user, idx) => {
        return  <SearchIndexItem
          clearSearchResults={this.props.clearSearchResults}
          user={user}
          key={idx} />;
    });
}
    return (
      <div>
      <input className="text" type="text" value={this.state.search}
      onChange={this.update} placeholder="Search Users"/>
      <div  className="searchButton">
      <i  className="fas fa-search"></i>
      </div>
      <div className="searchResults">
        <ul>
          {searchResults}
        </ul>
      </div>
      </div>
    );
  }
}

export default Search;
