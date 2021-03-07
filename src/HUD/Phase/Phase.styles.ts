import styled from "styled-components";

export const PhaseContainer = styled.div`
    display: grid;
    grid-template-rows: 15% 85px auto;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
`;

interface Phase {
    side?: 'ct' | 't';
    phase: 'paused' | 'timeout_ct' | 'timeout_t';
}

export const PhaseText = styled.div<Phase>`
    font-size: 2rem;
    font-weight: bold;
    color: white;
    grid-column: 2/3;
    grid-row: 2/3;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhaseBg = styled.div`
    padding: 2rem;
    background-color: rgba(0,0,0,0.6);
`;