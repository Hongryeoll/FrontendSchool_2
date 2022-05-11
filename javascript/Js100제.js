// 1번
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

// 2번
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// 3번

var arr = [100, 200, 300];
console.log(typeof(arr));
`Object`(배열은 타입이 객체이기에 오브젝트)

// 4번

다음 변수 a를 typeof(a)로 넣었을 때 에

1. 입력 : a = 1, 출력 : Number
2. 입력 : a = [1, 2, 3], 출력 : Object
3. 입력 : a = 'p', 출력 : String

4. 입력 : a = 2.22, 출력 : Boolean -> Number