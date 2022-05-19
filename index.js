// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree

function crawlTree(tree) {
  let word = ''
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      word += functions.crawlTree(tree[i]);
    }
    return word;
  } else {
    return tree;
  }
}

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
