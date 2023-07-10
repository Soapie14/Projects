#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // int x = get_int("x: ");
    // int y = get_int("y: ");
    //  get_long is for higher numbers of integers to process
    // truncation-loose everything after decimal point
    // %i for integer in print
    long x = get_long("x; ");
    long y = get_long("y: ");

    float z = (float) x + (float) y;

    // .20 is 20 integers
    printf("%.20f\n", z);
}

