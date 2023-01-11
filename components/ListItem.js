import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity>
      <Image
        style={{width: 150, height: 200}}
        source={{uri: item.thumbnails.w160}}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
    singleMedia: PropTypes.object,
  };

export default ListItem;
