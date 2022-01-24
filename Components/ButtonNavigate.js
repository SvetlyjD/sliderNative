import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import tw from 'tailwind-react-native-classnames';


function Buttonp(props) {
    return (
        <View backgroundColor="red" style={tw`flex mx-auto w-2/3 justify-center mt-20`}>
            <View style={tw`flex w-3/4 h-20 mx-auto font-semibold justify-center rounded-2xl 
      items-center text-2xl`}>
                <Link to={props.link} style={tw`text-center`}>
                    <Text style={tw`text-center`}>{props.name}</Text>
                </Link>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    buttonBg: {
        backgroundColor: "blue"

    },
});



export default Buttonp;