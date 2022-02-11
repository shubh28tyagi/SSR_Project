import React from 'react';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state={
            count:0,
            fetchedValues:[]
        }
    }

    componentDidMount(){
     //  this.fetchData()
    }

    fetchData(){
        fetch('http://localhost:3500/api/briefs')
        .then(res=>{
            console.log(res)
            //this.setState({fetchedValues: v})
        })
        .catch(err=>console.log(err));
    }

    captureClick(){
        this.setState(prevState => {return {count: prevState.count+1}})
   //     this.fetchData()
    }

    render(){
        console.log("inside render+++", this.state.fetchedValues);
        return(
            <div>
                <h2>This is the Home page</h2>
                <p>I'm the content and have been clicked {this.state.count} times</p>
                <button onClick={()=> this.captureClick()}>Click me!!</button>
            </div>
        )
    }
}
