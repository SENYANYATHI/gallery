import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as Camera  from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';


export default function App() {
let cameraRef = useRef();
const [hasCameraPermission,setHasCameraPermission] =useState();
const[hasMediaLibraryPermission,setHasMediaLibraryPermission]=useState();
const [photo,setPhoto] =useState ();

useEffect(() => {
  (async()=>{
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    setHasCameraPermission(cameraPermission.status === "granted");
    setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
  })();
},[]);

 if (hasCameraPermission === undefined) {
  return <Text>Requesting Permission ...</Text>
 }else if (!hasCameraPermission) {
  return <Text>Permission For Camera Not Granted Change This In SeTTINGS</Text>
 }

let takePic =async () => {
  let options ={
    quality:1,
    based64:true,
    exif:false
  };
  let newPhoto =await cameraRef.current.takePictureAsync(options);
  setPhoto(newPhoto);
};
if (photo) {
  let sharePic = () => {
    shareAsync(photo.uri).then (()=> {
      setPhoto(undefined);

    });
  };
let savePhoto =() => {
  MediaLibrary.saveToLibraryAsync(photo.uri).then (() => {
    setPhoto(undefined);

  });
};

   return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.preview} source={{ uri: "data:image/jpg:based64" + photo.based64}}/>
      <Button title='share' onPress={sharePic}/>
      {hasMediaLibraryPermission ? <Button title='save' onPress={savePic}/> : undefined}
      <Button title='discard' onPress={() => setPhoto(undefined)}/>
    </SafeAreaView>
   )
   };
   
  return (
<Camera style={styles.container}>
  <View style={styles.buttonContainer}>
  <Button
        title='take pic'
        onPress={takePic} />
  </View>
  <StatusBar style='auto'/>
</Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#blue',
    alignSelf: 'flex-end',
    Colors:'black'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
