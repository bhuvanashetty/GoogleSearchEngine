import './index.css'

const SuggestionItem = props => {
  const {userDetails, arrowItem} = props
  const {suggestion} = userDetails

  const onArrow = () => {
    arrowItem(suggestion)
  }

  return (
    <li className="row-box">
      <div className="row">
        <p>{suggestion}</p>
        <button type="button" className="arrow-button" onClick={onArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-img"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
