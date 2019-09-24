import * as List from './linkedList';
import Stack from './stack';
import Queue from './queue';
import CustomTree from './customTree';
import BTree from './binaryTreeStrategy';
import { basename } from 'path';

console.log(`---------- LIST -----------`);

const list = new List.LinkedList([1, 2, 3]);
console.log(`length: ${list.length()}`);
console.log(`array: ${list.toArray()}`);
list.append(4);
console.log('adding new element: 4');
console.log(`length: ${list.length()}`);
console.log(`array: ${list.toArray()}`);

console.log(`---------- STACK -----------`);

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(`length: ${stack.length()}`);
stack.pop();
console.log(`POP`);
console.log(`length: ${stack.length()}`);

console.log(`---------- QUEUE -----------`);

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(`length: ${queue.length()}`);
queue.pop();
console.log(`POP`);
console.log(`length: ${queue.length()}`);


console.log(`---------- CUSTOM TREE -----------`);

const customTree = new CustomTree<number>(3);
customTree.insert(1);
customTree.insert(2);
customTree.insert(3);
customTree.insert(4);
customTree.insert(5);
console.log(customTree.inOrderSearch(3, customTree.root));

console.log(`---------- BINARY TREE -----------`);

const binaryTree = new BTree.BinaryTree();

console.log(`tree elements: {a: 1, b: 2, c: 3, d: 4, e: 5}`);

binaryTree.insert({key: 'a', value: 1});
binaryTree.insert({key: 'b', value: 2});
binaryTree.insert({key: 'c', value: 3});
binaryTree.insert({key: 'd', value: 4});
binaryTree.insert({key: 'e', value: 5});

const inOrder = new BTree.InOrderSearch();
const preOrder = new BTree.PreOrderSearch();
const postOrder = new BTree.PostOrderSearch();

binaryTree.getAlgorythm = inOrder;
console.log(`inOrder: c = ${binaryTree.search('c', binaryTree.root)}`);

binaryTree.getAlgorythm = preOrder;
console.log(`preOrder: e = ${binaryTree.search('e', binaryTree.root)}`);

binaryTree.getAlgorythm = postOrder;
console.log(`preOrder: b = ${binaryTree.search('b', binaryTree.root)}`);




