n=int(input("enter the number"))
rever=0
n1=n
while n!=0:
    digit=n%10
    rever=rever*10+digit
    n=n//10
if n1==rever:
    print("palindrome number")
else:
    print("not a palindrome")

