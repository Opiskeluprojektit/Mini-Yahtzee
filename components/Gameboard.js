// Laura Vikström, TIK21KM

import React, { useState, useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Grid, Col, Row } from 'react-native-easy-grid';
import style from '../style/style';

let board = [];
let spots = new Array(6).fill(0);
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const BONUS = 63;
let checkBonus = true;

export default function Gameboard() {
    const [throwsLeft, setThrowsLeft] = useState(NBR_OF_THROWS);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('');
    const [selectedDice, setSelectedDice] = 
        useState(new Array(NBR_OF_DICES).fill(false));
    const [selectedPoints, setSelectedPoints] = 
        useState(new Array(6).fill(false));

    function getDiceColor(i) {
        return selectedDice[i] ? 'black' : '#1e7b1e';
    }

    function getSpotColor(i) {
        return selectedPoints[i] ? 'black' : '#1e7b1e';
    }

    function selectDice(i) {
        if (throwsLeft === 3) {
            setStatus('You have to throw dices first.')
        } else {
        let dice = [...selectedDice];
        dice[i] = selectedDice[i] ? false : true;
        setSelectedDice(dice);
        }
    }

    function selectPts(i) {
        let spot = [...selectedPoints];

        if (board.length <= 0 || throwsLeft > 0) {
                setStatus('Throw 3 times before setting points.')
            return;
        } else if (spot[i] === true) {
            setStatus('You have already selected points for ' + (i + 1));
            return;
        }

        spot[i] = true;
        setSelectedPoints(spot);
        countSpots(i);
        unSelectDices();
        setThrowsLeft(NBR_OF_THROWS);  
    }
    
    function unSelectDices() {
        let dice = [...selectedDice];
        dice.fill(false);
        setSelectedDice(dice);
    }

    function countSpots(val) {
        let sum = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i].endsWith(val + 1)) {
                sum += val + 1;
            }
        }

        spots[val] = sum;
        setTotal(total+sum);
    }

    function throwDice() {
            if (throwsLeft == 0) {
                return;
            } else if (BONUS <= total && checkBonus == true) {
                setTotal(total + 35);
                checkBonus = false;
            } else if (selectedPoints.every((val) => val === true)) {
                ResetGame();
            }

        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDice[i]) {
                let num = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-'+num;
            }
        }
        setThrowsLeft(throwsLeft - 1);
    }

    function receivedBonus() {
        if (total < BONUS) {
            return ('You are ' + (BONUS - total) + ' points away from bonus.')
        }
        else {
            return ('You got the bonus!')
        }
    }

    function ResetGame() {
        setThrowsLeft(NBR_OF_THROWS);
        selectedPoints.fill(false);
        setTotal(0);
        spots.fill(0);
        checkBonus = true;
    }

    const diceRow = [];
    for (let i=0; i < NBR_OF_DICES; i++){
        diceRow.push(
            <Pressable 
            key={'diceRow'+i} 
            onPress={() => selectDice(i)}>
            <MaterialCommunityIcons 
            name={board[i]} 
            key={'diceRow' + i} 
            size={style.diceSize} 
            color={getDiceColor(i)}>
            </MaterialCommunityIcons>
            </Pressable>
        )
    }

    const spotRow = [];
    for (let i = 0; i < 6; i++) {
        spotRow.push(
            <Col 
            style={style.column}
            key={'spotRow'+i}>
                <Text key={'spotCount' + i}>{spots[i]}</Text>
                <Pressable
                key={'spotPress'+i}
                onPress={() => selectPts(i)}>
                <MaterialCommunityIcons
                name={'numeric-' + (i + 1) + '-box'}
                key={'spotRow'+i}
                size={style.spotSize}
                color={getSpotColor(i)}>
                </MaterialCommunityIcons>
                </Pressable>
            </Col>
        )
    }

    useEffect(() => {
        if (throwsLeft > 0) {
            if (selectedPoints.every((val) => val === true)) {
                setStatus('Game over. Throw dice to start a new game.');
            }
            else {
                setStatus('Throw dice.');
            }
        }

        if (throwsLeft == 0) {
            setStatus('Select your points before next throw.');
        }
        if (throwsLeft < 0) {
            setThrowsLeft(NBR_OF_THROWS - 1);
        }
    }, [throwsLeft])

    return(
        <View style={style.gameboard}>
            <View style={style.row}>{diceRow}</View>
            <Text style={style.text}>Throws left: {throwsLeft}</Text>
            <Text style={style.text}>{status}</Text>
            <Pressable style={style.button} onPress={throwDice}>
                <Text style={style.buttonText}>Throw dice</Text>
            </Pressable>
            <Text style={style.textTotal}>Total: {total}</Text>
            <Text style={style.bonus}>{receivedBonus()}</Text>
            <Grid>
                <Row>{spotRow}</Row>
            </Grid>
        </View>
    );    
}


