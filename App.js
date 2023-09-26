import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>

      <Image source={require("./cat1.jpg")} style={styles.local_image} />
      <Image 
        source={{
          uri: "data:image/jpeg;base64,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"
        }} 
        style={styles.url_image}
      />
    
      <StatusBar style="auto" />

      <TextInput placeholder="이름을 입력해주세요." />

      <Button 
        title='Click Me!' 
        onPress={() => {
          console.log("clicked!");
        }}
      />

      <Switch value={true}/>
      <Switch value={false}/>

      <ScrollView>
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
        <Image source={require("./cat1.jpg")} style={styles.local_image} />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  },
});
