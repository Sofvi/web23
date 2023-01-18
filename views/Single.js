import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const Single = ({route}) => {
  console.log(route.params);
  const {title, description, filename, time_added} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + filename}}
        ></Image>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time_added}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081c15',
  },
  top: {
    justifyContent: 'center',
    height: '50%',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 300,
    overflow: 'hidden'
  },
  bottom: {
    height: '50%',
    padding: 18,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Droid Sans',
    textAlign: 'left'
  },
  time: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Droid Sans',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Droid Sans',
    paddingTop: 25
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
