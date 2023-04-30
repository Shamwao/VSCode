var removeElement = function(nums, val) {
    for (let i=0; i < nums.length; i++){
        if(nums[i]===val){
            const index = nums.indexOf(nums[i])
            nums.splice(index, 1)
            i--
        }
    }

    return nums
    
};

console.log(removeElement([2,3,3,2], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))