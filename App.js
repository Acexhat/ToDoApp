import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import List from './src/component/List';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [alltask, setAllTask] = useState([]);

  const handleAddTask = () => {
    setAllTask([...alltask, {
      taskName: task,
      completed: false
    }]);
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

  return (
    <View style={styles.container}>
      {/* Today Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where tasks will go */}
          {alltask.map((task, idx) => {
            return <List key={idx} idx={idx} task={task} handleDeleteTask={handleDeleteTask} markDoneTask={markDoneTask} />
          })}
        </View>
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
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginVertical: 30
  },
  newTaskWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 15
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
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addIcon: {
    fontSize: 30,
    color: "#C0C0C0"
  },
});
