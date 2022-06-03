//
//  double-practice.c
//  struct-class
//
//  Created by 안동규 on 2021/11/12.
//  doubly linked list review

#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    struct node *prev;
    struct node *next;
    int data;
}Dnode;

Dnode *head, *tail;

void IniNode()
{
    head = (Dnode*)malloc(sizeof(Dnode));
    tail = (Dnode*)malloc(sizeof(Dnode));
    if(head==NULL || tail==NULL){
        printf("메모리 할당 실패\n프로그램을 종료합니다.\n\n");
        exit(1);
    }
    head->next=tail;
    head->prev=tail;
    tail->next=head;
    tail->prev=head;
}

Dnode *searchnode(int i)
{
    Dnode *temp = head->next;
    if(temp->data!=i && temp->next!=tail){
        temp = temp->next;
    }
    return temp;
}

Dnode *firstnode(int j)
{
    Dnode *newnode = (Dnode*)malloc(sizeof(Dnode));
    if(newnode==NULL){
        printf("새 노드의 메모리 할당 실패\n프로그램을 종료합니다.\n\n");
        exit(1);
    }
    
    newnode->data = j;
    newnode->next = tail;
    tail->prev=newnode;
    newnode->prev = head;
    head->next = newnode;
    
    return newnode;
}

Dnode *makenode(int j, int k)
{
    Dnode *temp=searchnode(k);
    Dnode *newnode;
    if(temp!=head){
        newnode = (Dnode*)malloc(sizeof(Dnode));
        newnode->data=j;
        temp->prev->next=newnode;
        newnode->prev=temp->prev;
        newnode->next=temp;
        temp->prev=newnode;
    }
    return newnode;
}

void DeleteNode(int k)
{
    Dnode *temp = searchnode(k);
    temp->prev->next=temp->next;
    temp->next->prev=temp->prev;
    free(temp);
    temp = NULL;
}

Dnode *ascendnode(int k)
{
    Dnode *temp = head->next;
    Dnode *newnode = (Dnode*)malloc(sizeof(Dnode));
    newnode->data=k;
    while(temp->data<k && temp!=tail){
        temp=temp->next;
    }
    temp->prev->next=newnode;
    newnode->prev=temp->prev;
    newnode->next=temp;
    temp->prev=newnode;
    return newnode;
}

int FreeNode()
{
    Dnode *del = head->next;
    while(del->next!=tail){
        Dnode *temp;
        del->prev->next=del->next;
        del->next->prev=del->prev;
        temp=del->next;
        free(del);
        del = NULL;
        del = temp;
    }
    return 0;
}

int main_double_practice(void)
{
    IniNode();
    firstnode(3);

    ascendnode(9);
    ascendnode(5);

    Dnode *temp = head->next;
    while(temp!=tail){
        printf("%d\n",temp->data);
        temp=temp->next;
    }
    
    FreeNode();
    free(head);
    free(tail);
    head=NULL;
    tail=NULL;
    return 0;
}
