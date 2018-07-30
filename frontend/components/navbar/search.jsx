
import React from 'react';
import SearchIndexItem from './search_item';

 class Search extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       query: '',
       modal:false
     };
      this.sendQuery = this.sendQuery.bind(this);
      this.update = this.update.bind(this);
      this.resetSearch = this.resetSearch.bind(this);
      this.searchResults = this.searchResults.bind(this);
   }

   componentDidMount(){
     if(this.state.query !== ''){
     this.props.search(this.state.query);
    }
   }

   update(e) {
     this.setState({ modal:true,query: e.currentTarget.value }, () => {
     this.sendQuery();});
   }

   sendQuery(){
     this.props.search(this.state.query);
   }
   searchResults(){
     let searchResults = [];
     if(this.state.modal){
       if (this.props.searchResults === undefined) {
         searchResults = [];
       }else {
         searchResults = this.props.searchResults.map((user, idx) => {
           return  <SearchIndexItem
             clearSearchResults={this.props.clearSearchResults}
             user={user} status={this.state.modal} close = {this.resetSearch}
             key={idx} />;
       });
       }
     }
     return searchResults;
   }

   resetSearch(){
     this.setState({modal:false});
   }
  render(){


    return (
      <div className="searchMain">
      <div className="csearch">
      <input className="text" type="text" value={this.state.search}
      onChange={this.update} onBlur={this.resetSearch} placeholder="Search"/>
    <div  className={this.state.modal ? 'searchButton blueButton' : 'searchButton'}>
      <i  className="fas fa-search"></i>
      </div>
      <div className="searchResults">
        <ul>
          {this.searchResults()}
        </ul>
      </div>

      </div>
      </div>
    );
  }
}

export default Search;
