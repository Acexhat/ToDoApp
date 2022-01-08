import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function List(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={props.task.completed ? styles.squareCompleted : styles.square} onPress={() => { props.markDoneTask(props.idx) }}></TouchableOpacity>
                <Text style={styles.itemtext}>{props.task.taskName}</Text>
                {props.task.completed ? <Ionicons name="checkmark-done" size={24} color="green" /> : null}
            </View>
            <TouchableOpacity onPress={() => { props.handleDeleteTask(props.idx) }}>
                <AntDesign name="delete" size={22} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    squareCompleted: {
        width: 24,
        height: 24,
        backgroundColor: 'green',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemtext: {
        maxWidth: '80%',
        marginRight: 5
    },
    circularItem: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});