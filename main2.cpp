#include<iostream>
using namespace std;
int employed;
int recentGrad;
int main(){
    cout<<"are you employyed";
    cin>>employed;
    cout<<"Have you graduated from college "<<"int the past two Years?";
    cin>>recentGrad;
    if (employed == 'Y' && recentGrad == 'Y'){
     cout<<"you qulify for the spacail"<<"interest rate.\n";   
    }
    else{
    cout<<"you must br employye and hane\n"<<"graduate from college in the\n"<<"past two year ro qualify\n";
    }
}