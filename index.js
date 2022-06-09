// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree
function crawlTree(tree) {

  let word = '';
  for (let i = 0; i < tree.length; i++) {
    if (typeof tree[i] === 'string') {
      word += tree[i];
    } else {
      word += functions.crawlTree(tree[i]);
    }
  } return word;

  // // let word = '';
  // if (Array.isArray(tree)) {
  //   // for (let i = 0; i < tree.length; i++) {
  //   //   word += functions.crawlTree(tree[i])
  //   // }
  //   // return word
  //   return tree.reduce((acc,  el) => acc + functions.crawlTree(el), '');
  // } else {
  //   return tree
  // }

  // if (typeof tree === 'string') {
  //   return tree;
  // } else {
  //   for (let i = 0; i < tree.length; i++) {
  //     word += functions.crawlTree(tree[i])
  //   }
  //   return word;
  // }

};



// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === target) {
      return [i, i + 1]
    }
  }
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
