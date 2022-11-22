import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject})=>{
  return(
    <article className="quoteBox">
      <p style={colorObject}>{quote.quote}</p>
      <h2 style={colorObject}>{quote.author}</h2>
      <section className="quoteBox-footer">
        <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
        <i style={colorObject} className='bx bxs-quote-alt-left'></i>
      </section>
    </article>
    )
}
export default QuoteBox