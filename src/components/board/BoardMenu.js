import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createBoard } from '../../redux/slices/boardSlice';

const Wrapper = styled.div`
    padding: 16px;
`;

const StyledInput = styled.input`
    padding: 16px;
`;

const StyledButton = styled.button`
    padding: 16px;
`;

function BoardMenu() {
    const dispatch = useDispatch();

    const [newBoardName, setNewBoardName] = useState('');

    return (
        <Wrapper>
            <StyledInput
                value={newBoardName}
                onChange={(event) => {
                    setNewBoardName(event.target.value);
                }}
            />
            <StyledButton
                onClick={() => {
                    if (newBoardName === '') {
                        alert('추가할 보드 이름을 입력해주세요');
                        return;
                    }

                    dispatch(createBoard(newBoardName));
                    setNewBoardName('');
                }}>
                보드 추가하기
            </StyledButton>
        </Wrapper>
    );
}

export default BoardMenu;
