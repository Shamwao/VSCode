var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.slice(0, m)
    console.log(nums1)
    nums2= nums2.slice(0,n)
    console.log(nums2)
    for(let i=0;i<nums2.length; i++){
        nums1.push(nums2[i])
    }
    return nums1.sort()
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))