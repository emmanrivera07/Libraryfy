import React from 'react';
import { useState } from 'react';

import {FlatList, Text, View, TouchableHighlight } from 'react-native';
import BookListItem from '../../Components/Book/BookListItem';

const BOOK_LIST=[
    {
        id:1,
        title:"El principito",
        writer:"Antoine de Saint-Exupéry",
        cover:'https://i.pinimg.com/originals/b1/d5/0b/b1d50b4aca61d420efddd9302588baf4.jpg'
    },
    {
        id:2,
        title:"El alquimista",
        writer:"Paulo Coehlo",
        cover:'https://www.planetadelibros.com/usuaris/libros/fotos/120/m_libros/el-alquimista_9788408130451.jpg'
    },
    {
        id:3,
        title:"El coronel no tiene quien le escriba",
        writer:"Gabriel García Márquez",
        cover:'https://i.pinimg.com/474x/aa/df/8d/aadf8d60302cda191dfda3933f04f684.jpg'
    },
    {
        id:4,
        title:"Inteligencia emocional",
        writer:"Daniel Goleman",
        cover:'https://images.cdn2.buscalibre.com/fit-in/360x360/51/e1/51e14fa719554d732176ac06d9b5a3cc.jpg'
    },
    {
        id:5,
        title:"El amor en tiempos de cólera",
        writer:"Gabriel García Márquez",
        cover:'https://www.placerdeletras.com/wp-content/uploads/2019/07/el-amor-en-los-tiempos-del-colera-gabriel-garcia-marquez-D_NQ_NP_652407-MLU27680572908_072018-F.jpg'
    }
]

export default function BookList({navigation}){
const [books, setBooks]=useState(BOOK_LIST);

    function handleOnPress(){
        navigation.navigate('BookDetail');
    }
    return(
        <View>
            <FlatList 
                data={books}
                renderItem={({item})=><BookListItem book={item} onPress={handleOnPress}/>}
                keyExtractor={item=>item.id}
                ListHeaderComponent={
                    <View>
                        <Text>Mi lista de libros</Text>
                    </View>
                }
            />
        </View>
    );
}