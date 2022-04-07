class Component{
  constructor(){
    if(this.constructor === Component){
        throw new Error("Cannot instantiate from abstrack class!")
    }
  }

  render(){
    return
  }
}