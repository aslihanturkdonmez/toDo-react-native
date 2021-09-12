import React from 'react';
import {View, Text} from 'react-native';
import styles from './ToDoHeader.styles';

const ToDoHeader = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.count}>{props.countToDo}</Text>
        </View>
    )
};

export default ToDoHeader;

