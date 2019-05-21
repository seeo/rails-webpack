import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.getPost = this.getPost.bind(this);
    }

    state = {
        stuff: "",
        id: ""
    }

    componentDidMount(){
        this.getPost(1)
    }

    getPost(id){
        fetch(`/posts/${id}.json`)
            .then(function(res){return res.json()})
            .then(function(pikachu){console.log(pikachu.name)})

    }

    getPostBackUp(id) {

        let reactThis = this;

        function responseHandler (event){
            console.log("HERE LA" ,this)

            var response = JSON.parse(this.responseText);

       //     var res = JSON.stringify(response);

            console.log(response)
            reactThis.setState({ stuff: response });
        };

        var request = new XMLHttpRequest();

        request.addEventListener("load", responseHandler);

        request.open("GET", `/posts/${id}.json`);

        request.send();




    }



  render(){
    return(<div>
            <h1>APPPPPPP!</h1>
            <h2>this is being rendered by React in the components folder, the app.jsx file.</h2>
            <div>{this.state.stuff.name}</div>
          </div>);
  }
}