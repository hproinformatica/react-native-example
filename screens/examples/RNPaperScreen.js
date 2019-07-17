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
            gesturesEnabled: false,
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

    _double = value => {
        return value * 2;
    }

    _isOdd = value => {
        return (value % 2) === 1;
    }

    _sum = (leftValue, rightValue) => {
        return leftValue + rightValue;
    }

    _task = () => {
        const a = [1, 2, 3, 4];

        const mapResult = a.map(this._double);
        const filterResult = a.filter(this._isOdd);
        const reduceResult = a.reduce(this._sum);

        Alert.alert(
            'Resultado do exercício',
            `map: ${mapResult} | filter: ${filterResult} | reduce: ${reduceResult}`
        );
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
                <Button
                    icon="videogame-asset"
                    mode="contained"
                    // onPress={() => this.task()}
                    onPress={this._task}
                    style={styles.button}
                >
                    Mostrar resposta do exercício!
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