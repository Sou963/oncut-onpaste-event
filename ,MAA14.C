#include<stdio.h>
#include<math.h>
#include<conio.h>
main()
{
    int num;
    //choice a number of your own
    printf("num=");
    scanf("%d",&num);
    if(num%2==0)
        printf("It is a prime number");
    else
        printf("It is not a prime number");
    getch();
}


