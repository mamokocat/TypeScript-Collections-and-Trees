import LinkedList from './linkedList';
import Stack from './stack';
import Queue from './queue';
import CustomLeavesAmountTree from './customLeavesAmountTree';
import * as BTree from './binaryTreeStrategy';

console.log(`---------- LIST -----------`);

const list = new LinkedList([1, 2, 3]);
console.log(`length: ${list.length}`);
console.log(`array: ${list.toArray()}`);
list.append(4);
console.log('adding new element: 4');
console.log(`length: ${list.length}`);
console.log(`array: ${list.toArray()}`);

console.log(`---------- STACK -----------`);

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(`length: ${stack.length}`);
stack.pop();
console.log(`POP`);
console.log(`length: ${stack.length}`);

console.log(`---------- QUEUE -----------`);

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(`length: ${queue.length}`);
queue.pop();
console.log(`POP`);
console.log(`length: ${queue.length}`);


console.log(`---------- CUSTOM TREE -----------`);

const customTree = new CustomLeavesAmountTree<number>(3);

for(let index = 0; index < 26; index += 1){
  customTree.insert(index);
}

console.log(customTree.contains(4));
console.dir(customTree);

console.log(`---------- BINARY TREE -----------`);

const binaryTree = new BTree.BinaryTree();

binaryTree.insert({key: 'a', value: 1});
binaryTree.insert({key: 'b', value: 2});
binaryTree.insert({key: 'c', value: 3});
binaryTree.insert({key: 'd', value: 4});
binaryTree.insert({key: 'e', value: 5});

console.log(`binarySearch: b = ${binaryTree.search('b')}`);




