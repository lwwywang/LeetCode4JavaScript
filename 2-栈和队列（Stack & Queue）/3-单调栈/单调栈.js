var MonotonicStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MonotonicStack.prototype.findRightNextGreater = function(nums) {
    //初始化一个数组，用于存放结果
    const result = new Array(nums.length).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        //如果栈不为空且当前元素大于栈顶元素，则栈顶元素的右侧第一个更大的元素就是当前元素
        //while(!stack.isEmpyt() && stack.peek() < nums[i]) 
        while(this.stack.length !== 0 && nums[this.stack[this.stack.length - 1]] < nums[i]) {
            const index = this.stack.pop();
            result[index] = nums[i];
        }
        this.stack.push(i);
    }
    return result;
};

MonotonicStack.prototype.findRightNextSmaller = function(nums) {
    //初始化一个数组，用于存放结果
    const result = new Array(nums.length).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        while(this.stack.length !== 0 && nums[this.stack[this.stack.length - 1]] > nums[i]) {
            const index = this.stack.pop();
            result[index] = nums[i];
        }
        this.stack.push(i);
    }
    return result;
};

MonotonicStack.prototype.findLeftNextGreater = function(nums) {
    //初始化一个数组，用于存放结果
    const result = new Array(nums.length).fill(-1);
    for(let i = nums.length - 1; i >= 0; i--) {
        //如果栈不为空且当前元素大于栈顶元素，则栈顶元素的左侧第一个更大的元素就是当前元素
        while(this.stack.length !== 0 && nums[this.stack[this.stack.length - 1]] < nums[i]) {
            const index = this.stack.pop();
            result[index] = nums[i];
        }
        this.stack.push(i);
    }
    return result;
};

MonotonicStack.prototype.findLeftNextSmaller = function(nums) {
    //初始化一个数组，用于存放结果
    const result = new Array(nums.length).fill(-1);
    for(let i = nums.length - 1; i >= 0; i--) {
        while(this.stack.length !== 0 && nums[this.stack[this.stack.length - 1]] > nums[i]) {
            const index = this.stack.pop();
            result[index] = nums[i];
        }
        this.stack.push(i);
    }
    return result;
};


  
  // 使用示例
  const nums = [2, 3, 4, 1, 5, 3, 4];
  const stack = new MonotonicStack();
  console.log(stack.findRightNextGreater(nums));
  console.log(stack.findRightNextSmaller(nums));
  console.log(stack.findLeftNextGreater(nums));
  console.log(stack.findLeftNextSmaller(nums));
  