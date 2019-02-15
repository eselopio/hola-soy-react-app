import React, { Component } from 'react';
import ApprovalCard from './ApprovalCard';
import PullRequestDetail from './PullRequestDetail';
import faker from 'faker';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name : 'pipa c.'
    }
    
    console.log("Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    //es un método estático que se invoca después de que se crea una instancia de un componente, 
    //así como cuando recibe nuevos accesorios. Como es un método estático, no puede acceder thisdentro 
    //de este método ni tampoco puede acceder a ningún otro método de clase. Al contrario, componentWillReceivePropsno 
    //puede establecer el estado dentro de este método, por lo que la única forma de actualizar el estado es 
    //devolver un objeto. Si no desea actualizar ningún estado, simplemente regrese null.

    console.log("getDerivedStateFromProps", nextProps);
    console.log("getDerivedStateFromProps", prevState);
    if ( nextProps.author !== {} || prevState.name ) {
      return {name: prevState.name };
   }
  }

  componentDidMount = () =>{
    // Este ciclo se ejecuta exactamente cuando el componente se encuentra montado, 
    // podriamos decir que el componente ya se muestra en nuestro front-end, 
    // en este punto es recomendable.
    console.log("componentDidMount");
  }

  /**
   * @params Object prevProps Listado de props previos
   * @params Object prevState Listado de states previos
   * @params Object snapshot Indica si se agregaron nuevos elementos al realizar el re-render
   */
  componentDidUpdate = (prevProps, prevState, snapshot)=>{
    //Este ciclo se ejecuta justa despues de que es re-renderizado el componente
    console.log("componentDidUpdate");
  }


  shouldComponentUpdate(nextState, nextProps) {
    //Este ciclo es uno de los mas interesantes ya que practicamente nos permitira 
    //indicar si nuestro componente tiene que renderizar nuevamente esto nos puede 
    //ayudar a mejorar el performance de nuestra aplicacion, para poder identificar si el componente 
    //tiene que renderizarse nuevamente nos podemos apoyar realizando validaciones de las nuevas 
    //propiedades que recibimos basado en esto regresaremos un false o true dependiendo de nuetras necesidades.

    console.log("shouldComponentUpdate");
    const NEW_RENDER = (this.props.name !== nextProps.name);
    console.log("shouldComponentUpdate: ", NEW_RENDER);
    return NEW_RENDER;
  }

  handleSuperClic = (author) => {
    console.log("Evento clic en Componente Padre", author);
    this.setState( {name : author });
  }
  
  render() {
   const { name } = this.state; 
   console.log("Render" , name);
   
   return ( 
      <div className = "ui container comments" >
        <ApprovalCard onSelectoption ={this.handleSuperClic} >
              <PullRequestDetail author = {name}
              date = 'Ayer a las 3:35 PM'
              content = "MMB-2016 to -> develop"
              avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard onSelectoption ={this.handleSuperClic}> 
              <PullRequestDetail author = 'Pimbazo'
              date = 'Hoy a las 6:00 PM'
              content = "MMB-2019 to -> develop" 
              avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard onSelectoption ={this.handleSuperClic}>
              <PullRequestDetail author = 'Pumba'
              date = 'Hoy a las 1:20 PM'
              content = "MMB-2020 to -> develop" 
              avatar={faker.image.avatar()}
            />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;