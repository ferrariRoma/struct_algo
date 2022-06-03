// note에 있는 개념을 발전시켜서 연산까지!
#include <stdio.h>
#include <stdlib.h>

int solution(char **num)
{
    char operator[20];
    int number[20];
    int count = 0, i=0, j = 0;
    
    while((*num)[i]){
        // 숫자는 number배열에 삽입
        if((*num)[i] >= '1' && (*num)[i] <= '9'){
            number[j] = atoi(&(*num)[i]);
            j++;
        }
        // 곱셈,나눗셈 연산자를 만나면 number배열에서 숫자 2개 꺼내서 바로 계산!
        if((*num)[i] == '*' || (*num)[i] == '/'){
            if((*num)[i] == '*'){
                number[j-1] = number[j-1]*atoi(&(*num)[i+1]);
            }
            if((*num)[i] == '/'){
                number[j-1] = number[j-1]/atoi(&(*num)[i+1]);
            }
            i++;
        }
        // 덧셈,뺄셈 연산자를 만나면 operator에 넣어주기!
        if((*num)[i] == '+' || (*num)[i] == '-'){
            operator[count] = (*num)[i];
            count++;
        }
        i++;
    }
    
    // 마지막에 하나씩 계산해주기!
    while(count){
        count--;
        if(operator[count]=='+'){
            number[j-2] = number[j-2]+number[j-1];
            j--;
        }
        else if(operator[count]=='-'){
            number[j-2] = number[j-2]-number[j-1];
            j--;
        }
    }
    printf("%d\n",number[0]);
    return 0;
}

int main()
{
    char *number = "2+4*2/2-1";  // 2
    solution(&number);
    return 0;
}
