import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Slider1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: {
                '/Image/polar1.jpg': require('../Image/polar1.jpg'),
                '/Image/polar2.jpg': require('../Image/polar2.jpg'),
                '/Image/polar3.jpg': require('../Image/polar3.jpg')
            }
        }
    }

    render() {
        const { images } = this.state
        return (
            <View>
                <Image
                    resizeMode="contain"
                    source={images['/Image/polar1.jpg']}
                />
            </View>
        )
    }
}