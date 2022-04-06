import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Button,Vibration} from "react-native";
const Timer = ({ seconds,switchSecond }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [initTime] = useState(seconds);
    const [isStop,setIsStop] = useState(false)
    const displayTimeLeft = seconds => {
        let minutesLeft = Math.floor(seconds/60) ;
        let secondsLeft = seconds % 60;
        minutesLeft = minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
        return `${minutesLeft}:${secondsLeft}`;
    }
    const intervalCountDown =setInterval(()=>{
        if(timeLeft>0 && isStop === false) {
            setTimeLeft((value) => value - 1)
            clearInterval(intervalCountDown)
        }
        else if(timeLeft===0) {
            Vibration.vibrate(0)
            setTimeLeft(switchSecond)
            clearInterval(intervalCountDown)
        }
        else clearInterval(intervalCountDown)
    },1000)
    // setTimeout(()=>{
    //     if(timeLeft>0 && isStop === false) setTimeLeft((value)=>value-1)
    //     else console.log("okok")
    // },1000)
    return (
        <View style={style.component}>
            <Text style={style.timer}>{displayTimeLeft(timeLeft)}</Text>
            <View style={style.control}>
                <Button  title={'start'} onPress={()=> {
                    if(isStop===true) {
                        clearInterval(intervalCountDown)
                        setIsStop(false)
                    }
                }}/>
                <Button  title={'stop'} onPress={()=> {
                    if(isStop===false) {
                        clearInterval(intervalCountDown)
                        setIsStop(true)
                    }
                }}/>
                <Button  title={'reset'} onPress={()=> {
                    clearInterval(intervalCountDown)
                    setIsStop(true)
                    setTimeLeft(initTime)
                }}/>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    component:{
        justifyContent: 'center',
        alignItems:'center',
        height:'100%'
    },
    timer:{
        fontSize:25
    },
    control:{
        flexDirection:'row'
    }
})
export default Timer;
