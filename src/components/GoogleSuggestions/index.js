import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrowItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionList} = this.props

    const filteredSuggestions = suggestionList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
          className="search-image"
        />
        <input
          className="search-place"
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          placeholder="Type to search.."
        />
        <ul className="list">
          {filteredSuggestions.map(eachItem => (
            <SuggestionItem
              userDetails={eachItem}
              key={eachItem.id}
              arrowItem={this.arrowItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
