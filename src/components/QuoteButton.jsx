const QuoteButton= ({getNewValues, backgroundObject})=>{
  return(
    <button onClick={getNewValues} style={backgroundObject}>      
      <i className='bx bxs-right-arrow-circle'></i>
    </button>
    )
  }
  export default QuoteButton