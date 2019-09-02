
import React, { Component } from 'react';
import InputCustomizado from './componentes/InputCustomizado';

export class FormularioCadastro extends Component{
          
            constructor() {
                super();             
                this.enviaForm = this.enviaForm.bind(this);
                this.state ='';
              }

              enviaForm(evento){
             
                evento.preventDefault();
                this.setState({span:'Logado!'});
                 
              }
              
              render() {       

          return (
            <div>
            <h1>{this.state.span} </h1>

            <form onSubmit={this.enviaForm} method="post">
            <div className="input-group form-group">
                
                <div className="input-group-prepend">
                <span className="input-group-text">
                        <i className="fas fa-user">
                        </i>
                        </span>
                </div>

                <InputCustomizado id="login" className="form-control" type="text" name="login" placeholder="Login"/>                                              
               			
					</div>                    
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
                                <i className="fas fa-key">
                                    </i>
                                    </span>
						</div>
               
                <InputCustomizado id="senha" className="form-control" type="text" name="senha"  placeholder="senha"/>                                              
            
            	</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right btn-primary"/>
					</div>
				</form>
          
                </div>
         
      
                 );
          }
}

export default class CadastroBox extends Component{
        
    render() {
        return(
          <div>
            <FormularioCadastro  />
          </div>
        );
      }
    }