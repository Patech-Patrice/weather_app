import React from  'react';
import {StyleSheet, TextInput, View } from 'react-native';

// Here we export a component named SearchInput that accepts a placeholder prop
// This component returns a React Native TextInput with a few properties wrapped within a view
// applied appropriate styles to view container
// added underlineColorAndroid to remove dark underline that shows by default in Android
// this.props is written inside of the component to access the props property of that component
export default class SearchInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                autoCorrect={false}
                placeholder={this.props.placeholder}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                clearButtonMode="always"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
     },
});