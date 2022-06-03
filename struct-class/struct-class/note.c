#include <stdio.h>

int main_note(void)
{
    char *src = "A+B*C/D-E";
    char operator[16], op_count=0;
    
    while(*src)
    {
        if(*src>='A' && *src<='Z')
        {
            printf("%c", *src); // 문자는 바로 출력
        }
        else
        {
            if(*src=='*' || *src=='/'){
                operator[op_count++] = *src; // 곱셈,나눗셈은 저장
            } else{
                // 더하기, 빼기를 만나면 출력!
                while(op_count>0){
                    if(operator[op_count-1]=='+' || operator[op_count-1]=='-'){
                        break;
                    }
                    printf("%c",operator[--op_count]);
                }
                operator[op_count++] = *src;
            }
        }
        src++;
    }

    while(op_count){
        printf("%c",operator[--op_count]);
    }
    printf("\n");
    return 0;
}
