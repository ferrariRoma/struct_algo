class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        stackS = []
        stackT = []
        for i in s:
            if i == '#':
                if stackS:
                    stackS.pop()
            else:
                stackS.append(i)
        for i in t:
            if i == '#':
                if stackT:
                    stackT.pop()
            else:
                stackT.append(i)
        resultS = ''.join(stackS)
        resultT = ''.join(stackT)
        return resultS == resultT