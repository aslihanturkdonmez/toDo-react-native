import React from 'react';
import { View,Text, Pressable, TouchableHighlight } from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({toDo, done, deleteToDo}) =>{
    return (
        <View >
            <Pressable onPress={()=>done(toDo.id)} onLongPress={() => deleteToDo(toDo.id)}>
                <View style={toDo.done ? styles.container_done: styles.container}>
                    <Text style={toDo.done ? styles.content_done : styles.content}>{toDo.content}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ToDoCard;