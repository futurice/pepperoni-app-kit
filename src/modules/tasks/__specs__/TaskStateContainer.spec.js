/*eslint-disable max-nested-callbacks, no-unused-expressions, no-undef*/

import {Effects} from 'redux-loop';
import sinon from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import {initialState, dispatch} from '../../../../test/state';
import * as TaskStateActions from '../TaskState';

describe('TaskState', () => {

  // Example of how to test multiple dispatches in series
  xdescribe('getTasks', () => {
    // const getValue = state => state.getIn(['tasks', 'value']);

    it('should generate a random number and dispatch it', async () => {
      const action = await TaskStateActions.requestTasks();
      expect(action.payload).to.be.a('array');

      const [nextState] = dispatch(initialState, action);
      expect(nextState.getIn(['tasks', 'value'])).to.equal(action.payload);
      expect(nextState.getIn(['tasks', 'loading'])).to.equal(false);
    });
  });

  xdescribe('increment', () => {
    const getValue = state => state.getIn(['tasks', 'value']);

    it('should increment the value property by one', () => {
      const [secondState] = dispatch(initialState, TaskStateActions.increment());
      expect(getValue(secondState)).to.equal(getValue(initialState) + 1);

      const [thirdState] = dispatch(secondState, TaskStateActions.increment());
      expect(getValue(thirdState)).to.equal(getValue(secondState) + 1);
    });
  });

  xdescribe('reset', () => {
    it('should reset the tasks state to initial value', () => {
      // create an incremented state to test against
      const [modifiedState] = dispatch(initialState, TaskStateActions.increment());
      expect(modifiedState.get('tasks')).to.not.equal(initialState.get('tasks'));

      // reset to original and verify it === initial state
      const [resetState] = dispatch(modifiedState, TaskStateActions.reset());
      expect(resetState.get('tasks')).to.equal(initialState.get('tasks'));
    });
  });

  // Example of how to test side effects returned from reducers
  xdescribe('random', () => {

    const [nextState, effects] = dispatch(initialState, TaskStateActions.tasks());

    it('should update loading bit', () => {
      expect(nextState.getIn(['tasks', 'loading'])).to.equal(true);
    });

    it('should trigger a requestRandomNumber side effect', () => {
      expect(effects).to.eql(
        Effects.promise(TaskStateActions.requestRandomNumber)
      );
    });
  });

  // Example of how to test async action creators
  xdescribe('requestRandomNumber', () => {

    // randomizer uses timeouts to delay response, let's make it execute
    // instantly to improve test speed
    const sandbox = sinon.sandbox.create();
    beforeEach(() => sandbox.stub(global, 'setTimeout', setImmediate));
    afterEach(() => sandbox.restore());

    it('should generate a random number and dispatch it', async () => {
      const action = await TaskStateActions.requestRandomNumber();
      expect(action.payload).to.be.a('number');

      const [nextState] = dispatch(initialState, action);
      expect(nextState.getIn(['tasks', 'value'])).to.equal(action.payload);
      expect(nextState.getIn(['tasks', 'loading'])).to.equal(false);
    });
  });
});
