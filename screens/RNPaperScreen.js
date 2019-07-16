import React from "react";
import { Alert, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default class RNPaperScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title="Cliente" />
                    <Appbar.Action icon="done" onPress={navigation.getParam('onSaveButtonPress')} />
                </Appbar.Header>
            ),
            // gesturesEnabled: false,
        }
    }

    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        age: '',
    }

    componentDidMount() {
        this.props.navigation.setParams({ onSaveButtonPress: this._onSaveButtonPress });
    }

    componentWillUnmount() {
        this.props.navigation.setParams({ onSaveButtonPress: null });
    }

    _onSaveButtonPress = () => {
        Alert.alert('Sucesso', 'Você apertou o botão de Gravar com sucesso!');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    label='Nome do usuário'
                    mode='outlined'
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    style={styles.textInput}
                />
                <TextInput
                    label='Idade'
                    mode='flat'
                    value={this.state.age}
                    onChangeText={age => this.setState({ age })}
                    style={styles.textInput}
                />
                <Button
                    icon="wifi"
                    mode="contained"
                    onPress={() => Alert.alert('Alerta!', 'Você apertou o primeiro botão.', null, { cancelable: true })}
                    style={styles.button}
                >
                    Ícone + "Contained"
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => Alert.alert('Alerta!', 'Você apertou o segundo botão.', null, { cancelable: true })}
                    style={styles.button}
                >
                    "Outlined"
                </Button>
                <Button
                    icon="add-a-photo"
                    mode="text"
                    onPress={() => Alert.alert('Alerta!', 'Você apertou o terceiro botão.', null, { cancelable: true })}
                    style={styles.button}
                >
                    Ícone e "Text"
                </Button>
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
        marginTop: 10,
    },
    button: {
        marginTop: 10,
    },
});