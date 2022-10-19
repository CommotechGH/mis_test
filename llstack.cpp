#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
};

class Stack
{
public:
    int sz=0;
    Node *head;
    Node *tail;
    void push(int num);
    void pop();
    void size();
};
void Stack::push(int num){
    Node *tmp = new Node();
    tmp -> data = num;
    tmp -> next = NULL;
    
    if(sz==0){
        head = tmp;
    }
    else{
        tail -> next = tmp;
    }
    tail = tmp;
    sz++;
}
void Stack::pop(){
    cout << tail -> data << endl;
    Node *tmp = head;
    for(int i=0;i<(sz-2);i++){
        tmp = tmp->next;
    }
    tmp -> next = NULL;
    tail = tmp;
    sz--;
}
void Stack::size(){
    cout << sz << endl;
}



int main() {
    Stack sk = Stack();
    sk.push(1);
    sk.push(2);
    sk.push(3);
    sk.pop();
    sk.size();
    
}