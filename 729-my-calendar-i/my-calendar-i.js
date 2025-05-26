
var MyCalendar = function() {
    this.cal = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    for (let x of this.cal) {
        let [s, e] = x;

        if (startTime < e && endTime > s) {
            return false;
        }
    }
    
    this.cal.push([startTime, endTime]);
    return true;

};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */