import React from 'react'
import {Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function BookListItem({book, onPress}){
    return(
        
            <View style={styles.main_container}>
                <View>
                    <Image style={styles.image_book} source={{uri:book.cover}} style={{ width: 93, height: 150 }}/>
                </View>
                <View style={styles.text_book_container}>
                    <Text style={styles.text_title_book}>{book.title}</Text>
                    <Text style={styles.text_subtitle_book}>{book.writer}</Text>
                </View>
                <View style={styles.icon_book_container}>
                    
                        <View style={styles.icon_book}>
                            <TouchableHighlight onPress={onPress} underlayColor="transparent">
                                <Image source={require('../../assets/img/row-rigth.png')} style={{ width: 30, height: 30 }}/> 
                            </TouchableHighlight>
                        </View>
                   
                </View>
            </View>
        
    );  
}

const styles=StyleSheet.create({
    main_container:{
        flexDirection:'row',
        paddingVertical:15,
        paddingLeft:15,
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0', 
    },
    text_book_container:{
        paddingLeft:30,
        justifyContent:'center'
    },
    text_title_book:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'justify',
        minWidth:50,
        maxWidth:160,
        width:200
    }, 

    text_subtitle_book:{
        fontSize:12,
        textAlign:'justify',
        minWidth:30,
        maxWidth:150
    },
    icon_book_container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        width:100
    },
    icon_book:{
        justifyContent:'center',
    }
});