import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';




export function NormalScreen({ route }) {
    const [notice, setNotice] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { noticeType } = route.params;
    const { noticeUrl } = route.params;

    async function crawlNotice() {
        console.log(noticeUrl);
        await fetch(`http://49.143.69.123:51235/api/notice/${noticeUrl}/1`)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson);
            setNotice(resJson);
            setIsLoaded(true);
        });
    }

    if (!isLoaded) {
        crawlNotice()
    }


    var key = 0;
    
    if (isLoaded) {
        return (
            <ScrollView>
                <View style={ styles.container }>
                    {
                        notice.map((data) => {
                            key++;
                            return (
                                <View style={ styles.notice } key={key}>
                                    <View style={ styles.numbering }>
                                        <Text>{data.postNum}</Text>
                                    </View>
                                    <View style={ styles.innerNotice }>
                                        <Text>{data.post}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
    
        );
    }
    else {
        return (
            <View style={styles.container} >
                <Text>Loading...</Text>
            </View>
        )

    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems: "center",
    },
    notice: {
        flexDirection: "row",
        height: 60,
        width: "100%",
        padding: 7,
    },
    numbering: {
        borderWidth: 0.5,
        flex: 1,
    },
    innerNotice: {
        borderWidth: 0.5,
        flex: 4,
    }
});