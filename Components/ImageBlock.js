import React from "react";
import { Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

function ImageBlock() {
    return (
        <>
            <View>
                <View >
                    <Image
                        source={this.props.imgUri}
                        style={{
                            height: 30,
                            width: 30,
                            resizeMode: 'contain',
                        }}
                    />
                    {/* <Image source={require("../Image/polar1.jpg")} style={{ width: 100, height: 100 }}></Image> */}
                </View>

            </View>
        </>
    );
}
export default ImageBlock;