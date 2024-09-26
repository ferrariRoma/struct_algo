
var MyCalendar = function() {
    this.bookList = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.bookList = [];
MyCalendar.prototype.book = function(start, end) {
    if(this.checkDuple(start,end) === -1)  {
        this.bookList.push([start, end])
        return true;
    }
    return false;
};
MyCalendar.prototype.checkDuple = function(s2,e2) {
    return this.bookList.findIndex(([s1,e1])=>{
        if((s1 <= s2 && e2 <= e1)
          || (s2 <= s1 && e1 <= e2)
          ||(s1 <= s2 && s2 < e1)
          || (s1 < e2 && e2 <= e1)) return true;
        return false;
    });
}

                           
// 시작2 시작1 종료1 종료2
// 시작1 시작2 종료2 종료2
// 시작1 시작2 종료1 종료2
// 시작2 시작1 종료2 종료1
/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */