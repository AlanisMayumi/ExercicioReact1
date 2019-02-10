import React, {Component} from 'react';
import DoramaList from '../../Components/DoramaList/index'
import Loader from '../../Components/Loader/index'
import Intro from '../../Components/Intro/index'

class Dorama extends Component{
    state ={
        dorama: [],
        doramaName: '',
        isFetching: false
      }
    
    //   componentDidMount(){
    //    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //    .then(response => response.json()) 
    //    .then(json => this.setState({dorama: json}))
       //.then(json => console.log(json))
       //.then((response) => {console.log(response)})
     // }

      onDoramaInputChange = e =>{
        this.setState({ doramaName: e.target.value, isFetching: true})

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json()) 
        .then(json => this.setState({dorama: json, isFetching: false}))

      }

    render(){
      const { dorama, doramaName, isFetching } = this.state;

        return(
            <React.Fragment>
                <p>Dorama Container</p>
               <div> 
               <Intro message="Annyeonghaseyo!"/>
                   <div> 
                   The length of doramas array - {this.state.dorama.length}
                   </div>
               <input 
                  value={doramaName}
                  type="text" 
                  onChange={this.onDoramaInputChange}
                  />
              </div>
              {
                //se não houver nenhum dorama, e o texto digitado for vazio 
                !isFetching && dorama.length === 0 && doramaName.trim() === ''
                && 
                <p>Please enter dorama into the input</p>
              }
              {
                //se não houver nenhum dorama, e o texto digitado não for vazio
                //e não for encontrado
                !isFetching && dorama.length === 0 && doramaName.trim() !== ''
                &&
                <p>No Tv doramas have been found with this name</p>
              }
              {
                isFetching && <Loader /> //<p>Loading...</p>
              }
              {
                !isFetching && <DoramaList list={this.state.dorama}/> 
              }
               

            </React.Fragment>
        )
    }
}
export default Dorama;