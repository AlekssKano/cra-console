import React from 'react';
import styled, {css} from "styled-components";
import {StyledButton} from "./components/Button.styled";

//{<input type='text'/>}


//"https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-I6roRvxYqBTKfyGdvU7jUvJoy1Lop2iHBqiNwVSrxE4tBLGlWCB58dEGEnTGGl71dLUu1PZvnuzhULJ0Cu7QFrrfzhOsKrBhYIfNlb2AYLIch6y44qRGpOFMSFL2XC45zsK69xY9rzTts0~nU4okR2DXa8nyV6SDj0amiTb51PQlNqNx~wuoVdic-55EBxQV0vDnqW2KHQEe1e~j6lb1gH3NFwNIt9ey4uGSSLT3v-On-35xhXgWprNIDrafn3rYQdUkuCLsfTzucfZvZ1eWtRJlJuBbSXdUaUetHRWBGOsamOF2OmfNG~Y5-mNR1FO8EOybyz83Nh6pqeiCpbHQ__"
function App() {
    return (
        <div className="App">

            <Field>
                <Card>
                    <Rectangle>
                        <HeaderImage
                            src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-I6roRvxYqBTKfyGdvU7jUvJoy1Lop2iHBqiNwVSrxE4tBLGlWCB58dEGEnTGGl71dLUu1PZvnuzhULJ0Cu7QFrrfzhOsKrBhYIfNlb2AYLIch6y44qRGpOFMSFL2XC45zsK69xY9rzTts0~nU4okR2DXa8nyV6SDj0amiTb51PQlNqNx~wuoVdic-55EBxQV0vDnqW2KHQEe1e~j6lb1gH3NFwNIt9ey4uGSSLT3v-On-35xhXgWprNIDrafn3rYQdUkuCLsfTzucfZvZ1eWtRJlJuBbSXdUaUetHRWBGOsamOF2OmfNG~Y5-mNR1FO8EOybyz83Nh6pqeiCpbHQ__"
                            alt="card image"/>
                        <TextHeader>Headline </TextHeader><br/>
                        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                            venen.<br/></Text>
                        <StyledButton backgroundColor={'blue'} color={'snow'}>See More</StyledButton>
                        <StyledButton backgroundColor={'white'} color={'blue'}>Save</StyledButton>

                    </Rectangle>


                </Card>
            </Field>
        </div>
    );
}

export default App;
const Field = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #f0f6f0;
`
const Card = styled.div`
    width: 300px;
    height: 350px;
    top: -317px;
    left: -409px;
   
    border-radius: 15px 15px 15px 15px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 20px 5px #0000001A;



`
const Rectangle = styled.div`
    width: 280px;
    height: 330px;
    top: -317px;
    left: -409px;
    gap: 0px;
    border-radius: 10px 10px 10px 10px;
    background-color: #ffffff;
`
// const Photo = styled.div`
// <div className="png">
// <img src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-I6roRvxYqBTKfyGdvU7jUvJoy1Lop2iHBqiNwVSrxE4tBLGlWCB58dEGEnTGGl71dLUu1PZvnuzhULJ0Cu7QFrrfzhOsKrBhYIfNlb2AYLIch6y44qRGpOFMSFL2XC45zsK69xY9rzTts0~nU4okR2DXa8nyV6SDj0amiTb51PQlNqNx~wuoVdic-55EBxQV0vDnqW2KHQEe1e~j6lb1gH3NFwNIt9ey4uGSSLT3v-On-35xhXgWprNIDrafn3rYQdUkuCLsfTzucfZvZ1eWtRJlJuBbSXdUaUetHRWBGOsamOF2OmfNG~Y5-mNR1FO8EOybyz83Nh6pqeiCpbHQ__"
// alt=""/>
// <span>PNG</span>
// </div>`
const HeaderImage = styled.img`
    width: 280px;
    height: 170px;
    top: 10px;
    left: 10px;
    
 border-radius: 10px 10px 10px 10px; 
margin-bottom: 20px;
`
const TextHeader = styled.span`
    margin-left: 10px;
    font-family: Inter,serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    width: 70px;
    height: 19px;
    top: 200px;
    left: 20px;
    gap: 0px;
    opacity: 0px;
    color: #000000;
    


`
const Text = styled.span`
    padding-left: 10px;
    width: 260px;
    height: 40px;
    top: 239px;
    left: 20px;
    gap: 0px;
    font-family: Inter,serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #ABB3BA;
    
`