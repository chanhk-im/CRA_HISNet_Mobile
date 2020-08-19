import React from "react";
import { View, Text, Button } from "react-native";

export function NoticeMainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Notice</Text>
            <Button
                title="Normal"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "일반",
                        noticeUrl: "NB0001",
                    });
                }}
            />
            <Button
                title="School"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "학부",
                        noticeUrl: "B0020",
                    });
                }}
            />
            <Button
                title="Scholarship"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "장학",
                        noticeUrl: "JANG_NOTICE",
                    });
                }}
            />
            <Button
                title="Dormitory"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "생활관/RC",
                        noticeUrl: "RCNOTICE",
                    });
                }}
            />
            <Button
                title="Graduate"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "대학원",
                        noticeUrl: "RCNOTICE",
                    });
                }}
            />
            <Button
                title="Employment"
                onPress={() => {
                    navigation.navigate("Normal", {
                        noticeType: "취업",
                        noticeUrl: "B0364",
                    });
                }}
            />
        </View>
    );
}
