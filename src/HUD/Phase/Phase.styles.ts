import styled from "styled-components";
import { PhaseRaw } from "csgogsi";

export const PhaseContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface Phase {
    side?: 'ct' | 't';
    phase: 'paused' | 'timeout_ct' | 'timeout_t';
}

export const PhaseText = styled.div<Phase>`
    font-size: 2rem;
    font-weight: bold;

`;