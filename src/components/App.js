import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppBar from './AppBar';
import BoardList from './board/BoardList';
import BoardMenu from './board/BoardMenu';
import TodoList from './todo/TodoList';
import TodoMenu from './todo/TodoMenu';

const Wrapper = styled.div`
    width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    overflow: scroll;
`;

const BoardContainer = styled.div`
    flex: 1;
    border-right: 1px solid black;
`;

const TodoContainer = styled.div`
    flex: 2;
`;

function App() {
    const isBoardSelected = useSelector(
        (state) => !!state.board.selectedBoardId
    );

    return (
        <Wrapper>
            <AppBar />

            <ContentContainer>
                <BoardContainer>
                    <BoardList />
                    <BoardMenu />
                </BoardContainer>

                <TodoContainer>
                    <TodoList />
                    {isBoardSelected && <TodoMenu />}
                </TodoContainer>
            </ContentContainer>
        </Wrapper>
    );
}

export default App;
