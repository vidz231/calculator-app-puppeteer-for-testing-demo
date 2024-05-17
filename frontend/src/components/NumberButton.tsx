import PropTypes from 'prop-types';

NumberButton.propTypes = {
    num : PropTypes.number.isRequired,
};

function NumberButton(props) {
    return (
        <>
        <button>{props.num}</button>
        </>
    );
}

export default NumberButton;