#include<stdio.h>
#define PI 3.1416
main()
{
    float r,area;
    printf("Enter the value of r=");
    scanf("%f",&r);
    area=PI*r*r;
    printf("The area is %f",area);
    getch();
}

