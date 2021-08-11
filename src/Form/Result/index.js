import "./style.css";

export const Result = ({ result }) => (
    <p className="section__paragraph">
        Otrzymasz:&nbsp;  
        {result !== undefined && (
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        )}
    </p>
);