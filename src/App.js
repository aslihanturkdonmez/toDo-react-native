import React, {useState} from 'react';
import {View, Alert, Text, FlatList, StyleSheet} from 'react-native';
import ToDoBar from './components/ToDoBar';
import ToDoCard from './components/ToDoCard';
import ToDoHeader from './components/ToDoHeader/ToDoHeader';

const App = () =>{
  //(toDo.filter((td)=> td.done!=false).length)
  const [toDo, setToDo]=useState([]);
  const [text, setText]=useState();
  const [id, setId]=useState(0);
  const [touchFlag, setTouchFlag]=useState(true);

  const deleteToDo = (id) => {
    Alert.alert(
      "Kalıcı Olarak Silinecek",
      "Silmek istediğinizden emin misiniz?",
      [
        {
          text: "Vazgeç",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Evet", onPress: () => setToDo(toDo.filter(td=> td.id!=id))}
      ]
    );
    
  }

  const done = (id) => {
    let tmp = [ ...toDo];
    let index = toDo.findIndex(td => td.id === id);
    tmp[index] = {...toDo[index], done: true};
    setToDo(tmp);
  }

  const handleToDo = (text) =>{
      setText(text);
  }

  const submitButton = () =>{
    if(text!=undefined && text!=""){
      setToDo([...toDo,{id: id, content: text, done: false}]);
      setText("");
      setId(id+1);
    }
  }

  const touchInput = () => {
    setTouchFlag(false);
  }

  const blurInput = () => {
    setTouchFlag(true);
  }
  
  const renderToDo = ({item}) => <ToDoCard toDo={item} done={done} deleteToDo={deleteToDo}/>
  return (
    <View style={styles.container}>
      <ToDoHeader title={"Yapılacaklar "} countToDo={toDo.filter((td)=> td.done===false).length} />
      
      <FlatList 
        keyExtractor={item => item.id}
        data={toDo}
        renderItem={renderToDo} 
      />

      <ToDoBar 
        value={text}
        onToDo={handleToDo} 
        submit={submitButton} 
        focus={touchInput}
        blur={blurInput}
        disabled={touchFlag}
      />
    </View>
  )
}

export default App;

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#102027',
  }
})