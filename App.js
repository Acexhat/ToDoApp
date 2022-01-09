import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import List from './src/component/List';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [alltask, setAllTask] = useState([]);
  const scrollRef = React.useRef();

  const handleAddTask = () => {
    setAllTask([...alltask, {
      taskName: task,
      completed: false
    }]);
    handleScrollToEnd();
    setTask(null);
  }

  const handleDeleteTask = (index) => {
    console.log(index);
    let itemsCopy = [...alltask];
    itemsCopy.splice(index, 1);
    setAllTask(itemsCopy)
  }

  const markDoneTask = (index) => {
    let itemsCopy = [...alltask];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setAllTask(itemsCopy);
  }

  const handleScrollToEnd = () => {
    scrollRef.current.scrollToEnd({ animated: true })
  }

  return (
    <View style={styles.container}>
      {/* Today Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          style={styles.items}
        >
          {/* This is where tasks will go */}
          {alltask.map((task, idx) => {
            return <List key={idx} idx={idx} task={task} handleDeleteTask={handleDeleteTask} markDoneTask={markDoneTask} />
          })}
        </ScrollView>
      </View>

      {/* Write a New task Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.newTaskWrapper}
      >
        <TextInput style={styles.input} placeholder='Add a new task' value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addIconWrapper}>
            <Text style={styles.addIcon}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: "space-between",
  },
  tasksWrapper: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexGrow: 0.95,
    flex: 1,
    // borderWidth:1,
    // borderColor:"black"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    flexGrow: 1,
    marginTop: "5%"
  },
  newTaskWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexGrow: 0.05,
    // borderWidth:1,
    // borderColor:"red"
  },
  input: {
    width: 246,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    width: 250,
    textAlign: "center",
    alignItems: "center"
  },
  addIconWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ADD8E6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 30,
    color: "black"
  },
});
