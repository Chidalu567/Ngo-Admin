const Avatardiv = styled.div`
    background-color:white;
    text-align:center;
    width:100px;
    padding:30px;
    margin-right:5em;
    border-radius:40px;
    & > h3 {
        color:orange;
    }
    @media screen and (max-width:720px){
        border-radius:25px;
        margin-right:10px;
        width:45px;
        padding:5px;
    }
`;