// IMPORT MODULES under test here:
import { computerThrow, shoot } from '../RPS.utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const expected1 = 0;
    const expected2 = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = shoot('rock', 'scissors');
    const actual1 = shoot('rock', 'rock');
    const actual2 = shoot('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('it should take in a number and return that number squared', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = computerThrow();
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 1 || actual === 2 || actual === 3);
});