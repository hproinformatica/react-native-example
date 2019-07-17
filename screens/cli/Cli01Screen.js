import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, FAB, TextInput } from 'react-native-paper';

export default class Cli01 extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
                    <Appbar.Content title="Cli 01" />
                </Appbar.Header>
            ),
            gesturesEnabled: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text>Esta é a tela Cli01! Aperte o FAB para ir para a próxima tela!</Text>
                </ScrollView>
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => this.props.navigation.navigate('Cli02Screen')}
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