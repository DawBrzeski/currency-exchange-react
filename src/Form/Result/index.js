import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        Otrzymasz:&nbsp;  
        {result !== undefined && (
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        )}
    </Wrapper>
);