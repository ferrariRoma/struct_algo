#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 구조체 정의
typedef struct Node{
    struct Node* NextNode;
    char Data[20];
} NODE;

typedef struct Stack{
    struct Node* Top;
    struct Node* Base;
} STACK;

// 선언
void InitStack(STACK** Stack);
NODE* CreateNode(char Data[]);
void Push(STACK* Stack, char Data[]);
NODE* Pop(STACK* Stack);
void printNode(NODE* Node);
int IsEmpty(STACK* Stack);

int main_stack(void)
{
    STACK* Stack;
    
    InitStack(&Stack);
    
    Push(Stack, "짜장면");
    Push(Stack, "짬뽕");
    Push(Stack, "군만두");
    printNode(Pop(Stack));
    printNode(Pop(Stack));
    Push(Stack, "탕수육");
    Push(Stack, "팔보채");
    
    printf("\n\n");
    while(1)
    {
        if(IsEmpty(Stack)) break; // 비어있으면 1, true출력, 안비었으면 0출력.
        printNode(Pop(Stack));
    }
    
    return 0;
}

// 정의
void InitStack(STACK** Stack)
{
    (*Stack) = (STACK*)malloc(sizeof(STACK));
    (*Stack)->Top = NULL;
    (*Stack)->Base = NULL;
}

NODE* CreateNode(char Data[])
{
    NODE* newNode = (NODE*)malloc(sizeof(NODE));
    strcpy(newNode->Data, Data);
    newNode->NextNode = NULL;
    return newNode;
}

void Push(STACK* Stack, char Data[])
{
    NODE* newNode = CreateNode(Data);
    if(Stack->Base == NULL){
        Stack->Base = newNode;
    } else{
        Stack->Top->NextNode = newNode;
    }
    Stack->Top = newNode;
}

NODE* Pop(STACK* Stack)
{
    NODE* deleteNode = Stack->Top;
    if(Stack->Base == NULL){
        return 1;
    } else if(Stack->Top == Stack->Base){
        Stack->Top = NULL;
        Stack->Base = NULL;
    } else {
        NODE* currNode = Stack->Base;
        while(currNode->NextNode != deleteNode && currNode != NULL){
            currNode = currNode->NextNode;
        }
        currNode->NextNode = NULL;
        Stack->Top = currNode;
    }
    return deleteNode;
}

void printNode(NODE* Node)
{
    printf("%s\n", Node->Data);
    free(Node);
}

int IsEmpty(STACK* Stack)
{
    return (Stack->Base == NULL);
}
