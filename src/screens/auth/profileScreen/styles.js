import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimenssions";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.backgroundClr,
        paddingHorizontal: 20
    },
    imgStyle: {
        resizeMode: 'contain',
        height: rhp(350),
        width: rwp(350),
        alignSelf: 'center'
    },
    nameHeading: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
        color: colors.white,
        fontSize: rfs(24),
        textAlign: 'center',
        marginTop: rhp(50),
    },
    ageHeading: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
        color: colors.white,
        fontSize: rfs(24),
        textAlign: 'center',
        marginTop: rhp(40),
        marginBottom: rhp(40)
    }
})