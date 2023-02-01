import { Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title, onPress }) => {
    return (
        <Pressable 
        onPress={onPress}
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
    onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.creats({
    button: {},
    title: {
        fontSize: 50,
        color: "#ffffff",
    },
})

export default Button;