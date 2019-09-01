function superSort(array)
{
    let array_sorteado = [];
    let temporario = 0;
    for (i = 0; i < array.length; i++) { 
    
        for (j = 0; j < array.length; j++) { 
    
            if (array[i] < array[j]){

                temporario = array[i];
                array[i] =  array[j];
                array[j] = temporario;

             }
        }

      }
      return array;
}

module.exports = superSort;