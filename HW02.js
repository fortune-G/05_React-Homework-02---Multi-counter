function Background(){
    // const bg = {border : '1px solid grey',borderRadius : '10px',backgroundColor : 'white',padding :'30px',marginTop:'30px'}
    const [counters,setCounter] = React.useState([{id:1,number:0},
                                                 {id:2,number:0},
                                                 {id:3,number:0},
                                                 {id:4,number:0},
                                                 {id:5,number:0},
    ])
    const upDateCounter = (id) =>{
        console.log(id)
        const idx = counters.findIndex(el=>el.id === id)
        const newCounters = [...counters]
        newCounters[idx].number +=1
        setCounter(newCounters)
        // console.log(newCounters)
    }
    const decCounter = (id) =>{
        const idx = counters.findIndex(el=>el.id === id)
        const newCounters = [...counters]
        console.log(newCounters)
        if(newCounters[idx].number>0){newCounters[idx].number -=1}
        setCounter(newCounters)
    }
    const setZero = (id)=>{
        const idx = counters.findIndex(el=>el.id === id)
        const newCounters = [...counters]
        newCounters[idx].number = 0
        setCounter(newCounters) 
    }
    const sumAll = (number)=>{
        // {el.number}
        // console.log(el.number)
        const idx = counters.findIndex(el=>el.id === id)
        const newCounters = [...counters]
        newCounters[idx].number += el.number

        setCounter(newCounters)
    }
    const addCounter = (id) =>{
        const idx = counters(el=>el.id === id)
        const newCounters = [...counters]
        console.log(newCounters)
        setCounter(newCounters)
    }
    return (<div>
             <h1 className="show-sum">Sum: {sumAll}</h1>
             <button className="btn-add">Add Counter</button>
             <hr />
             {counters.map(el=>(
                <Counter key={el.id} item={el} upDateCounter={upDateCounter} decCounter={decCounter} setZero = {setZero} sumAll = {sumAll} addCounter={addCounter}/>
             ))}
    </div>  
    )
}
    
function Counter(props){
    console.log(props)
    const{item,upDateCounter,decCounter,setZero,sumAll,addCounter}= props
return(
 <div className="counter">
 <button onClick={()=>{decCounter(item.id)}}className="btn btn-dec">-</button>
 <h3 className="number">{item.number} </h3>
 <button onClick={()=>{upDateCounter(item.id)}} className="btn btn-inc">+</button>
 <button onClick ={()=>{setZero(item.id)}} className="btn btn-clr">C</button>
 </div>
)
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Background />);     