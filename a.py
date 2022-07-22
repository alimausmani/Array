

# a="python"
# print(a[2:6])


# a="pain12"
# print(a[4:6])


# a="alima"
# b="12.0"
# c=123
# d=13+3j
# print(a+b+c+d)



# if ("alima"):
#     print("123") 
# if ("alima"):
#     print("456") 
# if ("alima"):
#     print("789") 
# if ("alima"):
#     print("101112") 
# if ("alima"):
#     print("131415") 
# else:
#     print("Nothing")    
              

# if ("alima"):
#     print("123") 
# elif ("alima"):
#     print("456") 
# else:
#     print("789") 
# if ("alima"):
#     print("101112") 
# elif ("alima"):
#     print("131415") 
# else:
#     print("Nothing")    
              
# a=3
# b=5
# if a>b:
#     print("123") 
# if a<b:
#     print("456") 
# else:
#     print("789") 
# if ("alima"):
#     print("101112") 
# if ("alima"):
#     print("131415") 
# else:
#     print("Nothing")    
              
# a=23
# b=45
# c=89
# if a<b:
#     print("123") 
#     if c>a and b:
#         print("456") 
#     else:
#         print("789") 
#         if c<a:
#             print("101112") 
# if b>a and b>c:
#     print("131415") 
# else:
#     print("Nothing")    


# a=int(input("enter a number:"))
# b=int(input("enter a number:"))
# c=int(input("enter a number:"))
# d=int(input("enter a  number:"))
# if (a>b and a>c and a>d):
#     print(a,"a is  greatest number")
# elif (b>a and b>c and b>d):
#     print(b,"b is greatest number")
# elif(c>a and c>b and c>d):
#     print(c,"c is greatest number")
# elif (d>a and d>b and d>c):
#     print(d,"d is greatest number")
# else:
#     print(" nothing")

# a=int(input("enter a number"))
# i=1
# count=0
# while i<=a:
#     if a%i==0:
#         print("prime")
#     count=count+1
#     i=i+1
#     break
# if count==2:
#     print("prime number")
# else:
#     print("not prime number")

# a=[1,2,3,4,5,6,7,8,9,10]
# i=0
# b=[]
# sum=0
# while i<len(a):
#     if a[i]==1:
#         sum=sum+a[i+5]
#     sum=sum+
#     b.append(sum)
#     i=i+5
# print(a[1],b)
# print(a[5:11:1])

# a=int(input("enter a number"))
# i=0
# sum=0
# c=[]
# while i<a:
#     b=int(input("enter a number"))
#     c.append(b)
#     sum=sum+c[i]
#     i=i+1
# print(c)
# print(sum)


# def fun(a,b):
#     a=int(input("enter a number"))
#     i=0
#     sum=0
#     c=[]
#     while i<a:
#        b=int(input("enter a number"))
#        c.append(b)
#        sum=sum+c[i]
#        i=i+1
#     print(c)
#     print(sum)
# fun(int(input("enter a number")),(int(input("enter a number"))))


# s="welcome123to56navgurukul"
# output=["welcome","to","navgurukul"]
# s1="".join(c for c in s if c.isalpha())
# print ([s1]) 

# b=" ".join(s)
# c=[]
# for i in s:
#     if i>="a" and i<="z":
#         c.append(i)
#         s1=" ".join(c)
        
# print([s1])    



# a="python"
# print(a[2:])

# a=[1,2,3,4,5,6,8,9,10]
# b=[]
# i=0
# while i<len(a):
#     if i==2:
#         b.append(a[i])
#     if i>=6:
#         b.append(a[i])
#     i=i+1
# print(b)

# a=int(input("enter the num"))
# sum=0
# i=0
# while i<a:
#     b=int(input("enter the num"))
#     sum+=b
#     i=i+1
# print(sum)



# a=input("enter")
# sum=0
# i=0
# while i<len(a):
#     print(i)
#     sum+=int(a[i])
#     i=i+1

# if int(a)%sum==0:
#     print("perfect")
# else:
#     print("not perfect")







# a=["a","b","c","d"]
# b=[100,200,300,400]
# k={}
# i=0
# while i<len(a):
#     j=0
#     while j<len(b):
#         if i==j:
#             k.update({a[i]:b[j]})
#         j=j+1
#     i=i+1
# print(k)

# a=int(input("start"))
# i=1
# c=0
# while i<=a:
#     if a%i==0:
#         c=c+1
#     i=i+1
# if c==2:
#     print("prime")
# else:
#     print("not")
   


# def my_fun(a,b):
#     i=a
#     while i<=b:
#         c=0
#         j=1
#         while j<=i:
#             if i%j==0:
#                 c=c+1
#             j=j+1
#         if c==2:
#             print("prime")
#         else:
#             print("not")
#         i=i+1
# my_fun(2,8)