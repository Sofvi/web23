import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import WebFont from 'webfontloader';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', item);
      }}
    >
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + item.thumbnails?.w160}}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

WebFont.load = {
  google: {
    families: ['Droid Sans', 'Droid Serif:bold'],
  },
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: 0,
    marginRight: 10,
    marginBottom: 8,
    marginLeft: 10,
    height: 150,
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    borderRadius: 5,
  },
  box: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1b4332',
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 40,
    borderRadius: 5,
    minHeight: 100,
  },
  listTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Droid Sans',
    fontSize: 16,
    paddingBottom: 5,
  },
  description: {
    color: '#dee2e6',
    fontSize: 13,
    fontFamily: 'Droid Sans',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
WebFont;
