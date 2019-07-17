import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, FAB, TextInput } from 'react-native-paper';

export default class Pev02 extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title="Pev 02" />
                </Appbar.Header>
            ),
            gesturesEnabled: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text>Esta é a tela Pev02! Aperte o FAB para ir para a próxima tela!</Text>
                </ScrollView>
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => this.props.navigation.navigate('Pev03Screen')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        padding: 10,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
});