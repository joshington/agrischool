import React from 'react';

import styled from 'styled-components';

const ButtonWithInput = () => {
    return (
        <InputContainer>
            <input
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
            />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    
    input{
        height:30px;
        border-radius:15px;
        width:60%;
        margin-left:120px;
    }
    


`;

export default ButtonWithInput;