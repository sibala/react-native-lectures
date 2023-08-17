import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Image } from 'react-native';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons'; 
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


export const CameraApp = () => {
  /**
   * Permissions
   */
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const CameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraPermissions.status == 'granted')
      const MediaPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(MediaPermissions.status == 'granted')
      // console.log(CameraPermissions);
      // console.log(MediaPermissions);
    })();
  });

  /**
   * Camera functionalities
   */
  const cameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.on);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync()
        console.log(picture);
        setPicture(picture)
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  }

  /**
   * Handling picture and Media Library
   */
  const [picture, setPicture] = useState(null);

  const savePicture = async () => {
    try {
      // Create an asset out fo the picture
      const asset = await MediaLibrary.createAssetAsync(picture.uri)
      
      // Retrieve an existing album
      const album = await MediaLibrary.getAlbumAsync('Expo');

      if (album == null) {
        await MediaLibrary.createAlbumAsync('Expo', asset, false)
      } else {
        // Put the asset (picutre) in the album
        await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
      }

      setPicture(null)
    } catch (error) {
      console.log(error)
    }
  }

  if (hasCameraPermission === null || hasMediaPermission === null) {
    return (<View><Text>Waiting for permissions....</Text></View>);
  }
  if (hasCameraPermission === false || hasMediaPermission === false) {
    return (<View><Text>Permissions denied....</Text></View>);
  }
 

  if (picture !== null) {
    return (<SafeAreaView  style={styles.container}>
        <Image source={{uri: picture.uri}} style={{flex: 1}}/>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.generalButton}>
              <Feather name="trash-2" size={30} color="white" onPress={() => setPicture(null)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.generalButton}>
              <Entypo name="check" size={30} color="white"  onPress={() => savePicture()}/>
            </TouchableOpacity>

        </View>

      </SafeAreaView>
    )

  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Camera 
          style={styles.cameraContainer} 
          type={type} 
          flashMode={flash} 
          ref={cameraRef}
        >
          <View style={styles.buttonsTopContainer}>
            <TouchableOpacity style={styles.generalButton} >
              <FontAwesome name="refresh" size={24} color="white" onPress={() => toggleCameraType()}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.generalButton}>
              <Entypo name="flash" size={24} color={flash === FlashMode.on ? "yellow" : "white"} onPress={() => toggleFlash()}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsBottomContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
              <Entypo name="camera" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      </SafeAreaView>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  cameraContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  buttonsTopContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonsBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },

  generalButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 50,
    height: 50,
    marginRight: 5,
  },
  cameraButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  }
});

