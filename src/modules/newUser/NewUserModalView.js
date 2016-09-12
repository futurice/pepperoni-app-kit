import React, {PropTypes} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Modal
} from 'react-native';

const NewUserModalView = React.createClass({
  propTypes: {
    userId: PropTypes.number
  },
  getInitialState() {
    return {
      modalVisible: false
    };
  },
  componentDidMount() {
    let isNewUser = !(this.props.userId >= 0);
    console.log('newuser?:', isNewUser);

    if (isNewUser) {
      this.setState({
        modalVisible: true
      });
    }
  },
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },
  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {console.log('Modal has been closed.')}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
      </View>
    );
  }
});

export default NewUserModalView;
