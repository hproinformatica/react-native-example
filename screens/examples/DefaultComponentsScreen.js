import React from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';

export default class DefaultComponentsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Componentes Padrão',
            gesturesEnabled: false,
        }
    }

    constructor(props) {
        super(props);
    }

    state = {
        text: '',
    }

    _onAlertButtonPress = () => {
        Alert.alert(
            'Título',
            this.state.text,
            [
                { text: 'Botão neutro', onPress: () => console.log('Você apertou o botão neutro.') },
                { text: 'Botão negativo', onPress: () => console.log('Você apertou o botão negativo.') },
                { text: 'Botão positivo', onPress: () => console.log('Você apertou o botão positivo.') },
            ],
            { cancelable: false },
        );
    }

    _onChangeScreenButtonPress = () => {
        this.props.navigation.navigate('RNPaperScreen');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Componente de texto fingindo ser uma label!</Text>
                <TextInput
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    // Também funcionam: 
                    // onChangeText={text => this.setState({ text: text })}                    
                    // onChangeText={valueFromTextInput => this.setState({ text: valueFromTextInput })}
                    style={styles.textInput}
                />
                <Button
                    title="Exibir alerta com o texto do TextInput"
                    onPress={this._onAlertButtonPress}
                />
                <Button
                    title="Exibir uma tela mais bonita"
                    onPress={this._onChangeScreenButtonPress}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    textInput: {
        marginBottom: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});