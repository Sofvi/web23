import {View, Text} from "react-native"
import List from "../components/List";
import PropTypes from 'prop-types';

const MyFiles = ({navigation}) => {
    <List navigation={navigation} myFilesOnly={true} />
};

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
