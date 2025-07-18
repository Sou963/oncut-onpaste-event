#include<stdio.h>
main()
{
    int n,row,col;
    printf("n=");
    scanf("%d",&n);
    for(row=1;row<=n;row++)
    {
        for(col=1;col<=row;col++)
        {
            printf("%d",col);

        }
        printf("\n");
    }


}
