import "./style.css"; 

const Section = () => (
    <section className="section">
    <h2 className="section__header">Aktualne krusy:</h2>
    <div className="section__tableContainer">
        <table className="section__table">
            <tr>
                <th className="section__tableCell section__tableHeader" scope="col">Waluta</th>
                <th className="section__tableCell section__tableHeader" scope="col">kurs PLN</th>
            </tr>
            <tr>
                <th className="section__tableCell section__tableHeader" scope="row">EUR</th>
                <td className="section__tableCell">xxx</td>
            </tr>
            <tr>
                <th className="section__tableCell section__tableHeader" scope="row">USD</th>
                <td className="section__tableCell">xxx</td>
            </tr>
            <tr>
                <th className="section__tableCell section__tableHeader" scope="row">GBP</th>
                <td className="section__tableCell">xxx</td>
            </tr>


        </table>
    </div>
</section>
)

export default Section; 