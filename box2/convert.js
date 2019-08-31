function convertStringToData(data) { 

 var dia = data.split("/")[0];
 var ano = data.split("/")[2]
 var mes = data.split("/")[1]
  return new Date(ano, mes, dia); 
}

module.exports = convertStringToData;