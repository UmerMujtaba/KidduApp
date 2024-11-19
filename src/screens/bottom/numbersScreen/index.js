import React, { useRef, useState } from "react";
import CustomInputField from "../../../components/atoms/zuhrainputField";
import { colors } from "../../../constants/colors";
import { images } from "../../../assets/images";
import GradientButton from "../../../components/atoms/zhuraBtn";
import { ScrollView, View } from "react-native";
import ChapterListContainer from "../../../components/atoms/chapterList";

const NumbersScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [isSecureCheck, setIsSecureCheck] = useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: 'pink', padding:20}}>
                   {/* <View style={{ marginTop: 50 }}> */}
                {/* <CustomInputField
                    heading="Username or email address"
                    value={username}
                    onChangeText={setUsername}
                />
                <CustomInputField
                    heading="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isSecureCheck}
                    iconSource={
                        isSecureCheck
                            ? images.icons.eyeIcon
                            : images.icons.homeIcon

                    }
                    rightIcon
                    iconPress={() => setIsSecureCheck(!isSecureCheck)}
                /> */}

                {/* <GradientButton buttonText={'CREATE ACCOUNT'} /> */}
                <View style={{ marginTop: 50 }} />



                <ChapterListContainer title={'Course Documents'}/>


            {/* </View> */}


        </View>
    )
}

export default NumbersScreen