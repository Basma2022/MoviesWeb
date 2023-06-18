import spi from './spinner.gif'


const Spinner = ()=>{
    return(
        <div>
            <img 
            src={spi}
            alt = "Loading"
            style={{margin:"auto",width:"200px",display:'block'}}
            />
        </div>
    )
}

export default Spinner;