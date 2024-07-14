/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = [];
    let index1 = 0;
    let index2 = 0;
    let index = 0;
    while(index1 < m && index2 < n){
           if(nums1[index1] <= nums2[index2]){
               result[index] = nums1[index1];
               index++;
               index1++;
           }
           else{
               result[index] = nums2[index2];
               index++;
               index2++;
           }
    }
   
    while(index1 < m){
       result[index] = nums1[index1];
               index++;
               index1++;
    }
   
    while(index2 < n){
       result[index] = nums2[index2];
               index++;
               index2++;
    }
   
    for(var i=0; i<m+n; i++){
       nums1[i] = result[i]
    }
   };


const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3
console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]
