var MyCalendarTwo = function() {
    this.bookList = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    const stack = [];
    for(let i=0; i<this.bookList.length; i++) {
        if(
            start <= this.bookList[i][0] && this.bookList[i][0] < end
            || start < this.bookList[i][1] && this.bookList[i][1] <= end
            || this.bookList[i][0] <= start && start < this.bookList[i][1]
            || this.bookList[i][0] < end && end <= this.bookList[i][1]
        ) stack.push(this.bookList[i])
    }

    if(stack.length < 2) {
        this.bookList.push([start,end]);
        return true;
    }

    while(stack.length) {
        const temp = stack.pop();
        for(let i = 0; i < stack.length; i++) {
            if(
                temp[0] <= stack[i][0] && stack[i][0] < temp[1]
                || temp[0] < stack[i][1] && stack[i][1] <= temp[1]
                || stack[i][0] <= temp[0] && temp[0] < stack[i][1]
                || stack[i][0] < temp[1] && temp[1] <= stack[i][1]
            ) {
                return false;
            }
        }
    }
    
    this.bookList.push([start,end]);
    return true;
};

MyCalendarTwo.prototype.bookList = [];


/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 15 / 19 24  /  [ [ 16, 25 ], [ 19, 24 ] ]
 19 / 28 37  /  [ [ 33, 41 ], [ 35, 42 ], [ 28, 37 ] ]
 22 / 11 19  /  [ [ 5, 12 ], [ 16, 25 ], [ 13, 18 ], [ 11, 19 ] ]
 24 / 28 37  /  [ [ 33, 41 ], [ 35, 42 ], [ 28, 37 ] ]
 */