import React, { Component } from 'react'
import { View } from 'react-native'
import ImageGrid from './components/ImageGrid';

export default class index extends Component {

    renderInputMethodEditor() {
        return (
          <View style = {styles.inputMethodEditor}>
              <ImageGrid />
          </View>
        );
      }

    render() {
        return (
            <View>
                {this.renderInputMethodEditor()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputMethodEditor: {
        flex: 1,
        backgroundColor: 'white',
    },
});