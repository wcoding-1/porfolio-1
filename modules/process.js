


function processData(data){
    const programeArray = [];
  for(let n in data){
    programeArray.push(data[n]);
    // console.log(data[n])
    
  }
  return programeArray

}



const data = {
    processData,
}

export default data;
