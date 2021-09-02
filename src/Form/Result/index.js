import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        Za&nbsp;
        {result !== undefined && (
            <strong>
                {result.sourceAmount}&nbsp;PLN&nbsp;
            </strong>)}
        otrzymasz&nbsp;
        {result !== undefined && (
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        )}
    </Wrapper>
);