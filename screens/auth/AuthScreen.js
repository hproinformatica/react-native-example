import React from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class AuthScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    _onButtonPress = () => {
        this.props.navigation.navigate('DrawerNavigator');
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/images/logo.png')} resizeMode="contain" style={styles.logo} />
                </View>
                <View style={styles.inputContainer}>
                    <Button
                        title="Acessar aplicativo"
                        onPress={this._onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    logoContainer: {
        flexGrow: 2,
    },
    logo: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    inputContainer: {
        flexGrow: 1,
    },
});