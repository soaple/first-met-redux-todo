import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { resetBoardSagaRequested } from '../redux/slices/boardSlice';

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid black;
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ItemCountText = styled.span`
    font-size: 1rem;
`;

function AppBar() {
    const boards = useSelector((state) => state.board.boards);
    const boardTodosMap = useSelector((state) => state.todo.boardTodosMap);
    const dispatch = useDispatch();

    const [unfinishedTodoCount, finishedTodoCount] = useMemo(() => {
        let unfinishedTodoCount = 0;
        let finishedTodoCount = 0;

        Object.values(boardTodosMap).forEach((todos) => {
            todos.forEach((todo) => {
                if (todo.isFinished) {
                    finishedTodoCount++;
                } else {
                    unfinishedTodoCount++;
                }
            });
        });

        return [unfinishedTodoCount, finishedTodoCount];
    }, [boardTodosMap]);

    return (
        <Wrapper>
            <span>
                <b>처음 만난 리덕스 TODO</b>
            </span>

            <MenuContainer>
                <ItemCountText>
                    {`보드 ${boards.length}개 / `}
                    {`할 일 (미완료: ${unfinishedTodoCount}개, 완료 ${finishedTodoCount}개)`}
                </ItemCountText>

                <button
                    onClick={() => {
                        if (window.confirm('정말 초기화 하시겠습니까?')) {
                            dispatch(resetBoardSagaRequested());
                        }
                    }}>
                    초기화
                </button>
            </MenuContainer>
        </Wrapper>
    );
}

export default AppBar;
