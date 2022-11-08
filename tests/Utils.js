const test = require('ava');
const { Queue, PriorityQueue } = require('../utils/Utils.Data.js');
const cats = require('./data/cats.json').cats;

test('Queue', t => {
  const queue = new Queue();
  queue.push(cats[0]);

  t.is('Jin', queue.peek());

});

test('Priority Queue', t => {
  const numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.random());
  }
  const pqueue = new PriorityQueue();
  numbers.forEach(number => {
    pqueue.push(number);
  })
  let result = [];

  while (!pqueue.isEmpty()) {
    result.push(pqueue.pop());
  }

  console.log([...numbers].sort((a, b) => b - a));


  pqueue.pop();
  console.log(pqueue.items);

  t.is([...numbers].sort((a, b) => b - a), result);

})
