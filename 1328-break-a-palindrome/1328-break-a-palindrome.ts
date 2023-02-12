function breakPalindrome(palindrome: string): string {
    if(palindrome.length<=1) return "";

    let answer = [...palindrome].map((el)=>el.charCodeAt(0));
    const onlyA = answer.filter((el)=>el===97);
    if(onlyA.length===answer.length || onlyA.length===answer.length-1) {
        answer[answer.length-1] = 98;
        return answer.map((el)=>String.fromCharCode(el)).join("");
    }

    let count = 0;
    let ascii = 97;

    count = 0;
    while(count<Math.floor(answer.length/2)) {
        ascii = 97;
        while(ascii<=122) {
            if(answer[count]>ascii) {
                answer[count] = ascii;
                return answer.map((el)=>String.fromCharCode(el)).join('');
            }
            ascii++;
        }
        count++;
    }
};