import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from "prop-types"
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => handleDelete(item.ed)} className="close">
            <FaTimes color="purple" />
        </button>
        <div className='text-diplay'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem