export const validation = {
  email:{
    presence:{
      message:'email'
    },
    format:{
       pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
       message:'Please enter a valid email address'
    }
  },
  password:{
    length:{
       message:'please enter more than 6 chars'
    }
  }

}


export function validate(nameField, value){
  let resp = [null,null];
  if(validation.hasOwnProperty(nameField)){
  console.log("validation")
    let v = validation[nameField]
        if(value==''||value==null){
           console.log("validation null")
           resp[0]=false
           resp[1]=v['present']['message']
      }else if(v.hasOwnProperty('format') && !v['format']['pattern'].test(value)){
    resp[0]=false
    resp[1]=v['format']['message']
      }else if(v.hasOwnProperty('length')&&value.length<6){
        resp[0]=false
        resp[1]=v['length']['message']
      }else{
        resp[0]=true
      }
   }else{
    resp[0]= true
   }
   return resp;
}