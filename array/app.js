/* ====================kadane alogo=================

Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) 
which has the maximum sum and return its sum.

Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.

Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)

*/
//=================================================== solution
// function solve(arr){
//     let sum =arr.reduce((x,y) => x + y)
//     let newArray=[]
//     console.log("29",sum)
// for(let i=0; i<arr.length; i++){
//     let temp=0
//     for(let j=i; j<arr.length; j++){
//         temp=temp+arr[j]
//         if(temp>sum){
//             console.log(temp,sum)
//             sum=temp
//         }
//     }
// }
// console.log(sum)
// }
// solve([-1,-2,-3,-2,-5])



/** 
@merge_to_sorted_array 

Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order.
Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements
and modify arr2 so that it contains the last M elements.

Input: 
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two 
non-decreasing arrays, we get, 
0 1 2 3 5 6 7 8 9.

Input: 
n = 2, arr1[] = [10, 12] 
m = 3, arr2[] = [5 18 20]
Output: 
arr1[] = [5 10]
arr2[] = [12 18 20]
Explanation:
After merging two sorted arrays 
we get 5 10 12 18 20.
*/

// =================solution==================================
/**
 * @solution
 */
// function mergeShortedArray(arr1, arr2){
// const lenghtOfArrayOne=arr1.length;
// const lenghtOfArrayTwo=arr2.length;
// const sortAndMergedArray=[]
// let i=0
// while(sortAndMergedArray.length<(lenghtOfArrayOne+lenghtOfArrayTwo)){
// if((arr2[i]===undefined)||(arr1[i]<arr2[i]&&arr1[i])){
//     sortAndMergedArray.push(arr1.shift())
// }
// else{
//     sortAndMergedArray.push(arr2.shift())
// }
// }
// console.log(sortAndMergedArray)
// arr1=sortAndMergedArray.slice(0,lenghtOfArrayOne)
// arr2=sortAndMergedArray.slice(lenghtOfArrayOne,(lenghtOfArrayOne+lenghtOfArrayTwo))
// // console.log(arr1,arr2)

// }
// mergeShortedArray([1, 3, 5, 7] ,[0 ,2 ,6 ,8 ,9])



/**
 * @Rearrange_Array_Alternately
 * Given a sorted array of positive integers. Your task is to rearrange 
 *  the array elements alternatively i.e first element should be max value, second should be min value, 
 * third should be second max, fourth should be second min and so on
 * 
 * Input:
N = 6
arr[] = {1,2,3,4,5,6}
Output: 6 1 5 2 4 3
Explanation: Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.
 * 
 * 
 * Input:
N = 11
arr[]={10,20,30,40,50,60,70,80,90,100,110}
Output:110 10 100 20 90 30 80 40 70 50 60
Explanation: Max element = 110, min = 10, 
second max = 100, second min = 20, and 
so on... Modified array is : 
110 10 100 20 90 30 80 40 70 50 60.
 * 
 */

/**
 * @solution
 * */
// function rearrange(arr){
//     const newArray=[]
//     const copyArray=[...arr]
//     while(newArray.length<arr.length){
//         if(copyArray.length>0)newArray.push(copyArray.pop())
//         if(copyArray.length>0)newArray.push(copyArray.shift())
//     }
//     console.log(newArray)
// }
// rearrange([10,20,30,40,50,60,70,80,90,100,110])

/**
 * @Number_of_pairs 
 * 
 * Given two arrays X and Y of positive integers, 
 * find the number of pairs such that xy > yx (raised to power of) 
 * where x is an element from X and y is an element from Y
 * 
 * Input: 
M = 3, X[] = [2 1 6] 
N = 2, Y[] = [1 5]
Output: 3
Explanation: 
The pairs which follow xy > yx are 
as such: 21 > 12,  25 > 52 and 61 > 16 

Input: 
M = 4, X[] = [2 3 4 5]
N = 3, Y[] = [1 2 3]
Output: 5
Explanation: 
The pairs for the given input are 
21 > 12 , 31 > 13 , 32 > 23 , 41 > 14 , 
51 > 15 .
 */

/**
 * @solution
 */

// function pair(arr1,arr2){
//     let sum=0
//     for(let i = 0; i < arr1.length; i++){
//         // console.log(i)
//         for(let j = 0; j < arr2.length; j++){
//             // console.log("",j)
//             // console.log(Math.pow(arr1[i],arr2[j]),Math.pow(arr2[j],arri[i]))
//             if(Math.pow(arr1[i],arr2[j])>Math.pow(arr2[j],arr1[i])){
//                 // console.log(arr1[i],arr2[j])
//                 sum+=1
//         }
//     }
// }
//     console.log(sum)
// }
// pair([2,3,4,5],[1 ,2 ,3])

/** 
 * @count_inversions
 * Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
 

Example 1:

Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 
has three inversions (2, 1), (4, 1), (4, 3).
Example 2:

Input: N = 5
arr[] = {2, 3, 4, 5, 6}
Output: 0
Explanation: As the sequence is already 
sorted so there is no inversion count.
Example 3:

Input: N = 3, arr[] = {10, 10, 10}
Output: 0
Explanation: As all the elements of array 
are same, so there is no inversion count.
*/
/**
 * @solution
 */
    // function inversion(arr) {
    //     let number=0
    //     for(let i = 0; i < arr.length; i++) {
    //         let temp
    //         for(let j = i; j < arr.length;j++){
    //             if(arr[i]>arr[j]){
    //                 temp=arr[j]
    //                 arr[j]=arr[i]
    //                 arr[i]=temp
    //                 number++
    //             }
    //         }
    //     }
    //     console.log("number",number)
    //     console.log(arr)
    // }
    // inversion([12, 12, 12, 12, 12])

/**
 * @convert_object_into_array
 * input
 * {
 * 1:2
 * 3:1
 * 4:5
 * 2:2
 * }
 * output
 * [1,1,3,3,3,4,4,4,4,4,2,2]
 */
/**
 * @solution
 */
// function otoA(obj){
//     const arr=[]
// for(let i in obj){
//     if(obj[i]>0){
//         let j=0
//         while(j<obj[i]){
//             arr.push(i)
//             j++
//         }
        
//     }
// }
// console.log(arr)
// }
// otoA({ 1:2,
//     10:1,
//     4:5,
//     2:2})

/**
 * @Equilibrium_Point
 * Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array. 
Equilibrium Point in an array is a position such that the sum of elements
before it is equal to the sum of elements after it.
Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 3 
Explanation: For second test case 
equilibrium point is at position 3 
as elements before it (1+3) = 
elements after it (2+2).
 */

/**@solution */
// function equilibrium(arr){
// let sum=arr.reduce((x,y)=>x+y);
// let temp=0
// for(let i=0;i<arr.length;i++){
//     temp+=arr[i]
//     if(temp===sum){
//         return i+1
//     }
//     else{
//         temp+=arr[i]
//     }
// }
// }
// console.log(equilibrium([1,3,5,2,2]))

/**
 * @param {Leaders in an array}
 * @param  {Given an array A of positive integers. 
 * Your task is to find the leaders in the array. 
 * An element of array is leader if it is greater 
 * than or equal to all the elements to its right side. 
 * The rightmost element is always a leader. }
 * @param {Input:
n = 6
A[] = {16,17,4,3,1,2}
Output: 17 5 2
Explanation: The first leader is 17 
as it is greater than all the elements
to its right.  Similarly, the next 
leader is 5. The right most element 
is always a leader so it is also 
included.}
 */
/**
 * @solution
 */
// function LeaderInArray(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i-1]<arr[i]){
//             console.log(arr[i])
//         }
//     }
//     console.log(arr[arr.length-1])
// }
// LeaderInArray([16,17,4,3,5,2])
// merge sort
// bubble sort
// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     console.log(arr)
// }
// bubbleSort([1,3,5,2,2])

// implementation of merge sort
// function mergeSort(arr){
//     if(arr.length===1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let result=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         }
//         else{
//             result.push(right.shift())
//         }
//     }
//     while(left.length){
//         result.push(left.shift())
//     }
//     while(right.length){
//         result.push(right.shift())
//     }
//     return result
// }
// console.log(mergeSort([1,3,5,2,2]))
//  get object from s3 bucket
// build express server

//  fibonacci series
// function fibonacci(n){
//     let a=0
//     let b=1
//     let c=0
//     for(let i=0; i<n; i++){
//         c=a+b
//         a=b
//         b=c
//     }
//     return c
// }
// console.log(fibonacci(5))

// shift an array by three times
// function shift(arr){
//     let temp=arr[0]
//     for(let i=0; i<arr.length-1; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1]=temp
//     console.log(arr)
// }
// shift([1,2,3,4,5])
// rotate an array by k times
// function rotate(arr,k){
//     let temp=arr.slice(0,k)
//     for(let i=0; i<arr.length-k; i++){
//         arr[i]=arr[i+k]
//     }
//     for(let i=arr.length-k; i<arr.length; i++){
//         arr[i]=temp[i-arr.length+k]
//     }
//     console.log(arr)
// }
// rotate([1,2,3,4,5],2)
// rotate 3d matrix by 90 degree
// function rotate(arr){
//     let n=arr.length
//     for(let layer=0; layer<n/2; layer++){
//         let first=layer
//         let last=n-1-layer
//         for(let i=first; i<last; i++){
//             let offset=i-first
//             let top=arr[first][i]
//             arr[first][i]=arr[last-offset][first]
//             arr[last-offset][first]=arr[last][last-offset]
//             arr[last][last-offset]=arr[i][last]
//             arr[i][last]=top
//         }
//     }
//     console.log(arr)
// }
// rotate([[1,2,3],[4,5,6],[7,8,9]])
// // pop in linked list
// function pop(head){
//     let temp=head
//     while(temp.next.next){
//         temp=temp.next
//     }
//     temp.next=null
//     return head
// }
// push in linked list
// function push(head,data){
//     let newNode=new Node(data)
//     let temp=head
//     while(temp.next){
//         temp=temp.next
//     }
//     temp.next=newNode
//     return head
// }
// delete node in linked list
// function deleteNode(head,data){
//     let temp=head
//     while(temp.next){
//         if(temp.next.data===data){
//             temp.next=temp.next.next
//             break
//         }
//         temp=temp.next
//     }
//     return head
// }
// insert node in linked list
// function insertNode(head,data,position){
//     let newNode=new Node(data)
//     let temp=head
//     for(let i=0; i<position-1; i++){
//         temp=temp.next
//     }
//     newNode.next=temp.next
//     temp.next=newNode
//     return head
// }
// reverse linked list
// function reverse(head){
//     let temp=head
//     let prev=null
//     while(temp){
//         let next=temp.next
//         temp.next=prev
//         prev=temp
//         temp=next
//     }
//     return prev
// }

// const arr=[1,2,3,4,5]
// const arr1=[2,3,4,1,5]
