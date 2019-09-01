function improvedArrays(items)
{
    var sortedArray = quickSort(items, 0, items.length - 1);
    return sortedArray;
}

var items = [5,3,7,6,2,9];
function partition(items, esquerda, direita) {
    var pivot   = items[Math.floor((direita + esquerda) / 2)], 
       i        = esquerda, 
        j      = direita; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {

            var temp = items[esquerdaIndex];
            items[esquerdaIndex] = items[direitaIndex];
            items[direitaIndex] = temp;
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, esquerda, direita) {
    var index;
    if (items.length > 1) {
        index = partition(items, esquerda, direita); 
        if (esquerda < index - 1) { 
            quickSort(items, esquerda, index - 1);
        }
        if (index < direita) { 
            quickSort(items, index, direita);
        }
    }
    return items;
}

Array.prototype.quickSort = () => improvedArrays(this);