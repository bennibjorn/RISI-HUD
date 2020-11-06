import React from "react";
import { PhaseRaw, Map } from "csgogsi-socket";
import { FC } from "react";
import * as Styled from './Phase.styles';

interface IProps {
    phase?: PhaseRaw
    map?: Map
}

export const Phase: FC<IProps> = ({ phase, map }) => {
    if (phase && (phase.phase === 'paused' || phase.phase === 'timeout_ct' || phase.phase === 'timeout_t')) {
        return <Styled.PhaseContainer>
            <Styled.PhaseText phase={phase.phase}>
                {phase.phase === 'paused' && <>PAUSE</>}
                {phase.phase === 'timeout_ct' && <>{map?.team_ct.name} TIMEOUT</>}
                {phase.phase === 'timeout_t' && <>{map?.team_t.name} TIMEOUT</>}
            </Styled.PhaseText>
        </Styled.PhaseContainer>
    } else {
        return null;
    }
}