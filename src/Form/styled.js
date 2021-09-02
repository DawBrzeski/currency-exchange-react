import styled from "styled-components";

export const Wrapper = styled.form`
 text-align: center;
    font-size: 18px;
    max-width: 600px;
    margin: 40px auto;
    padding: 60px;
    background-color: rgba(250, 244, 244, 0.932);
    border-radius: 20px;
    box-shadow: 0px 5px 19px -6px #BCBCBC;
`;

export const Label = styled.label`

`;

export const LabelText = styled.span`

max-width: 300px;
    width: 100%;
    display: inline-block;
    margin: 20px 0;

`;

export const Buttons = styled.div`
    margin-top: 50px;
    text-align: center;

`;

export const Button = styled.button`
    width: 100%;
    background-color: pink;
    padding: 10px 0;
    box-shadow: 0px 5px 19px -6px #BCBCBC;
    text-align: center;

&:hover {
    background-color: rgba(252, 157, 193, 0.822);
    }

`;
