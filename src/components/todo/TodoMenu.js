import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../redux/slices/todoSlice';

const Wrapper = styled.div`
    padding: 16px;
`;

const StyledInput = styled.input`
    padding: 16px;
`;

const StyledButton = styled.button`
    padding: 16px;
`;

function TodoMenu() {
    const [newTodoName, setNewTodoName] = useState('');

    const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <StyledInput
                value={newTodoName}
                onChange={(event) => {
                    setNewTodoName(event.target.value);
                }}
            />
            <StyledButton
                onClick={() => {
                    if (newTodoName === '') {
                        alert('추가할 할 일을 입력해주세요');
                        return;
                    }

                    dispatch(
                        addTodo({
                            boardId: selectedBoardId,
                            todo: newTodoName,
                        })
                    );
                    setNewTodoName('');
                }}>
                할 일 추가하기
            </StyledButton>
        </Wrapper>
    );
}

export default TodoMenu;
