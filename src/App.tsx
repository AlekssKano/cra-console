import React from 'react';
import styled, {css} from "styled-components";

function App() {
    return (

        <StyledBody>
            <StyledGrid>
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6 </GridItem>
                <GridItem>7</GridItem>
                <GridItem>8</GridItem>
            </StyledGrid>
        </StyledBody>

    );
}

export default App;

const StyledBody = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    padding: 15px;


`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns:  repeat(4, 265px);
    grid-auto-rows: minmax(200px, auto);
    gap: 20px;
    //    grid-template-areas:
    //"one two three four"
    //"five five six eight"
    //"five five seven eight";
    // row-gap:10px;
    //column-gap: 30px;
`
const GridItem = styled.div`
    background-color: #69B7E4;
    
       

    &:nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4; 
    }
    //
    //&:nth-child(6) {
    //    grid-area: 2/2/3/4;
    //    background-color: rgba(251, 0, 227, 0.5);
    //}
    //
    &:nth-child(8) {
        grid-column: 4/5;
        grid-row: 2/4;
        grid-area: 2/4/span 2/5;
    }


    //&:first-child {
    //    grid-area: one;
    //}
    //&:nth-child(2) {
    //    grid-area: two;
    //}
    //&:nth-child(3) {
    //    grid-area: three;
    //}
    //
    //&:nth-child(4) {
    //    grid-area: four;
    //}
    //
    //&:nth-child(5) {
    //    grid-area: five;
    //}
    //
    //&:nth-child(6) {
    //    grid-area: six;
    //}
    //
    //&:nth-child(7) {
    //    grid-area: seven;   
    //}
    //
    //&:last-child  {
    //    grid-area: eight;
    //}
`
