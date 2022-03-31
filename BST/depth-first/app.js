const BST = {
    root: {
        value: 100,
        right: {
            value: 300,
            right: {
                value: 400,
                right: null,
                left: { value: 350, right: null, left: null }
            },
            left: { value: 250, right: null, left: null }
        },
        left: { value: 50, right: null, left: null }
    }
}
function deapthSearch(tree) {
    const data = [];
    function traverse(node) {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        data.push(node.value)
    }
    traverse(tree.root)
    console.log(data)
}
deapthSearch(BST)
// function to merge two sorted arrays
function merge(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++
        } else {
            merged.push(arr2[j])
            j++
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
}