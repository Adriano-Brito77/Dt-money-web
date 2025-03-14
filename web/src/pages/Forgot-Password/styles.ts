import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;


` 

export const Container = styled.div`
    height: auto;
    width: 600px;
    border-radius: 5px;
    border:2px solid rgb(0, 211, 148);
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;

`
export const ContainerInputReset = styled.div`
    width: 100%;
    gap: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;

    label{
        padding-left: 4px;
    }

`


export const ContainerElement = styled.form`

    height: 100%;
    width: 100%;
    max-width: 80%;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 20px;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 32px;
    width: 100%;
    color: #fff;
`

export const SubTitle = styled.p`
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 40px;
`

