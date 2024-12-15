/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const pq = new MaxPriorityQueue();
    for(let i=0; i<classes.length; i++) {
        pq.enqueue(i, ((classes[i][0]+1)/(classes[i][1]+1))-(classes[i][0]/classes[i][1]));
    }
    let count = 0;
    while(count != extraStudents) {
        const {element, _} = pq.dequeue();
        pq.enqueue(element, ((classes[element][0]+2)/(classes[element][1]+2))-((classes[element][0]+1)/(classes[element][1]+1)));
        classes[element] = [classes[element][0]+1, classes[element][1]+1];
        count++;
    }
    let ans = 0;
    for(const [pass, students] of classes) {
        ans += (pass/students);
    }
    return parseFloat((ans/classes.length).toFixed(5))
};