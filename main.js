function Faktoriyel(n)
{
    if (n == 0)
        return 1;
    else
        return n * Faktoriyel(n - 1);
}
 
console.log(Faktoriyel(4)); //24
