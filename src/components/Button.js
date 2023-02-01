import { Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
    return (
        <Pressable
        style={({ pressed }) => [
            { backgroundColor: 'red' },
            pressed && { backgroundColor: 'orange', opacity: 0.3 },
          ]}
        >
        <Text>{title}</Text>
        </Pressable>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Button;