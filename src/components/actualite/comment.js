import React, {Component} from 'react'
class Comment {
    state={
        poste:{}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=> {
            return response.json()
        })
     .then((result)=> {  
     })
    }
    render(){
        return(
            <div className="Comment">
          
            {(this.state.post.title)? this.state.post.title : <p>chargement........</p>}
            </div>
        )
    }
}
export default Comment