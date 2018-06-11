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

   componentDidMount(){
     debugger
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
    debugger
    let searchResults = [];
    console.log("search results");
    console.log(this.props.searchResults);

    if (this.props.searchResults === undefined) {
      return 'loading';
    }

    else {
      searchResults = this.props.searchResults.map((user, idx) => {
        return (<SearchIndexItem clearSearchResults={this.clearAll}
          user={this.props.users[user.id]}
          key={idx} />);
      });

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
}
export default Search;
