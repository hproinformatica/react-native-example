import React from "react";
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { Appbar, Button, FAB, TextInput } from 'react-native-paper';

export default class Cli03 extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title="Cli 03" />
                    <Appbar.Action icon="done" onPress={navigation.getParam('onSaveButtonPress')} />
                </Appbar.Header>
            ),
            gesturesEnabled: false,
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ onSaveButtonPress: this._onSaveButtonPress });
    }

    componentWillUnmount() {
        this.props.navigation.setParams({ onSaveButtonPress: null });
    }

    _onSaveButtonPress = () => {
        Alert.alert('Atenção!', 'Mensagem interessante!');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Esta é a tela Cli03! Aperte o botão salvar acima para uma mensagem interessante!</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
});