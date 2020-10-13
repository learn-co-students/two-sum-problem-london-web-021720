const bruteForceTwoSum = (arr, sum) => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
            } else {
                if (j < i) {
                } else {
                    if (arr[i] + arr[j] === sum) {
                        answer.push([arr[i], arr[j]])
                    }
                }
            }
            
        }
        
    }
    return answer
}

const binarySearchTwoSum = (arr, sum) => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
            } else {
                if (j < i) {
                } else {
                    if (arr[i] + arr[j] === sum) {
                        answer.push([arr[i], arr[j]])
                    }
                }
            }
            
        }
        
    }
    return answer
}

const binaryMatch = (arr, sum) => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
            } else {
                if (j < i) {
                } else {
                    if (arr[i] + arr[j] === sum) {
                        answer.push([arr[i], arr[j]])
                    }
                }
            }
            
        }
        
    }
    return true
}

const hashTwoSum = (arr, sum) => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
            } else {
                if (j < i) {
                } else {
                    if (arr[i] + arr[j] === sum) {
                        answer.push([arr[i], arr[j]])
                    }
                }
            }
            
        }
        
    }
    return answer
}