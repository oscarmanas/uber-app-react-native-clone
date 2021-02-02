import { View, TextInput, SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    useEffect(()=>{
        if (originPlace && destinationPlace)
        console.warn('Redirect to results')
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
            <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                    setOriginPlace({data, details});
                    console.log(data, details);
                }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails
                    query={{
                    key: 'AIzaSyAdmusNfspvGyTY9-QFy6V2LLA5hxIObdw',
                    language: 'en',
                }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                    setDestinationPlace({data, details});
                    console.log(data, details);
                }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails
                    query={{
                    key: 'AIzaSyAdmusNfspvGyTY9-QFy6V2LLA5hxIObdw',
                    language: 'en',
                }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch;
