import React from 'react';
import { View, TextInput, Text, Pressable} from 'react-native';
import styles from './ToDoBar.styles';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Yapılacak..." 
                onChangeText={props.onToDo} 
                value={props.value} 
                onFocus={props.focus} 
                onBlur={props.blur}
                placeholderTextColor="#5f676a"
            />
            <View style={styles.line}/>
            <Pressable 
                style={props.value==(undefined || "") ? styles.buttonDark : styles.button}
                onPress={props.submit} 
            >
                <Text style={styles.button_text}>Kaydet</Text>
            </Pressable>
        </View>
    )
}

export default SearchBar;