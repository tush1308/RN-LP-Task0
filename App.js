import * as React from 'react';
import {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput ,Button, StyleSheet, View, Alert, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'Welcome'}}
        />
        <Stack.Screen name="Profile Details" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to My profile"
      onPress={() =>
        navigation.navigate('Profile Details', { name: 'My' })
      }
    />
  );
};

const Profile = () => {

  useEffect(() => {
      readData();
  })
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setemail] = useState('');
  const [birthday, setbirthday] = useState('');

  const STORAGE_KEY0 = '@save_name'
  const STORAGE_KEY1 = '@save_number'
  const STORAGE_KEY2 = '@save_mail'
  const STORAGE_KEY3 = '@save_dob'

  const saveData = async () => {
      try {
          await AsyncStorage.setItem(STORAGE_KEY0, name)
      } catch (e) {
          Alert.alert('Failed to save the data to the storage')
      }
      try {
          await AsyncStorage.setItem(STORAGE_KEY1, num)
      } catch (e) {
          Alert.alert('Failed to save the data to the storage')
      }
      try {
          await AsyncStorage.setItem(STORAGE_KEY2, email)
      } catch (e) {
          Alert.alert('Failed to save the data to the storage')
      }
      try {
          await AsyncStorage.setItem(STORAGE_KEY3, birthday)
      } catch (e) {
          Alert.alert('Failed to save the data to the storage')
      }
      Alert.alert('Your details have been saved successfully');
  }


  const readData = async () => {

      try {
          const username = await AsyncStorage.getItem(STORAGE_KEY0)

          if (username !== null) {
              setName(username)
          }
      } catch (e) {
          Alert.alert('Failed to fetch the data from storage')
      }
      try {
          const userphoneNumber = await AsyncStorage.getItem(STORAGE_KEY1)

          if (userphoneNumber !== null) {
              setNum(userphoneNumber)
          }
      } catch (e) {
          Alert.alert('Failed to fetch the data from storage')
      }

      try {
          const useremail = await AsyncStorage.getItem(STORAGE_KEY2)

          if (useremail !== null) {
              setemail(useremail)
          }
      } catch (e) {
          Alert.alert('Failed to fetch the data from storage')
      }
      
      try {
          const userbirthday = await AsyncStorage.getItem(STORAGE_KEY3)

          if (userbirthday !== null) {
              setbirthday(userbirthday)
          }
      } catch (e) {
          Alert.alert('Failed to fetch the data from storage')
      }

  }

  return (
      <View style={styles.container}>
          <View style={styles.roww}>
              <Text style>Name: </Text>
              <TextInput
                  style={{height: 35,
                    width: "80%",
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    borderWidth: 1,
                  }}
                  placeholder='Name'
                  value={name}
                  onChangeText={(text) => setName(text)}
              />
          </View>
          <View style={styles.roww}>
              <Text>Phone No </Text>
              <TextInput
                  style={{height: 35,
                    width: "54%",
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    borderWidth: 1,
                  }}
                  keyboardType='number-pad'
                  value={num}
                  onChangeText={(text) => setNum(text)}
              />
          </View>
          <View style={styles.roww}>
          <Text>Email.:</Text>
              <TextInput
                  style={{height: 35,
                    width: "52%",
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    borderWidth: 1,}}
                  placeholder='E-mail'
                  keyboardType='email-address'
                  value={email}
                  onChangeText={(text) => setemail(text)}
              />
          </View>
          <View style={styles.roww}>
          <Text>Birth Date:</Text>
              <TextInput
                  style={{height: 35,
                    width: "52%",
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    borderWidth: 1,}}
                  placeholder='DD/MM/YYYY'
                  value={birthday}
                  onChangeText={(text) => setbirthday(text)}
              />
              </View>
              <Pressable style={styles.buttonStyle} onPress={() => saveData()}>
                  <Text style={styles.buttonText}>SAVE YOUR DETAILS</Text>
              </Pressable>
          
      </View>
  )

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   padding:5,
  },
  buttonContainer: {
    margin: 10
  },
  roww: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText:{
    padding: 5,
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  buttonStyle:{
    fontSize:16,
    color:"white",
    backgroundColor:"blue",
    padding:5,
    marginTop:25,
    minWidth:250,
  }
});

export default App;