// var merge = function(nums1, m, nums2, n) {
//     let max = Math.max(m,n);
//     let newArr=[];
//     let j =0;
//     let k =0;
//     for(let i=0;i<max*2;i++){
//        if(i<max){

//           if(nums1[k] <= nums2[j] ){
//              newArr[i] = nums1[i];
//              k++;
//           }

//           else{
//              newArr[i] = nums2[j]
//              j++
//           }
//        }

//        else{
//             if(k<m){
//                  newArr[i] = nums1[k];
//                  k++;
//             }
    
//             else{
//                  newArr[i] = nums2[j]
//                  j++
//             }
//        }


//     }  

//     return newArr    
// };




let nums1 = [1, 0]; 
let m = 2; 
let nums2 = [2]; 
let n = 1;


let result = merge(nums1, m, nums2, n);


 console.log(result); 