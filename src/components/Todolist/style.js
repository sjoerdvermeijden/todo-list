import styled from 'styled-components';

export const TodoWrapper = styled.div`
  

    ul {
        list-style: none;
    }

    li {

        &:not(:last-child) {
            margin-bottom: 15px;
        }

    }
`;