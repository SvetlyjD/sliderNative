import React from "react";
import { Image, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Buttonp from "../Components/ButtonNavigate";


export class Main extends React.Component {

    render() {
        return (
            <>
                <View>
                    <View >
                        <Buttonp link="/slider" name="Перейти к слайдеру"></Buttonp>
                    </View>
                    <View style={tw`flex mx-auto w-4/6 mt-5`}>
                        <View style={tw`text-center`}>
                            <Text>Здесь должноjjjjj быть приветствие</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}
// export default Main;