import styled, {css} from "styled-components";
type StyleButtonProps = {
    backgroundColor?:string;
color?:string;
}
export const StyledButton =styled.button<StyleButtonProps>`
    width: 86px;
    height: 30px;
    top: 298px;
    left: 20px;
    
    border-radius: 5px 5px 5px 5px;
    border-color: blue;
    background-color: ${props => props.backgroundColor || "#971818"};
   color: ${props => props.color || "#31735c"};

    //padding: 10px 20px;
    //color: snow;
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
   margin-top: 35px; 
    margin-left: 10px;
    
    //position: relative;
    top: 100px;
    //left: 50px; -

`