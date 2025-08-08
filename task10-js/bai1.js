// Viết hàm biến đổi mảng các chuỗi "key:value" thành object
// Thực hiện viết hàm convertArrayToObject() để biến đổi mảng các chuỗi dạng key:value thành object

// Input:
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((obj, item) => {
    const [key, value] = item.split(":");
    obj[key] = value;
    return obj;
  }, {});
}

// Output:
convertArrayToObject(arrayString); // { name: 'John', age: '30', city: 'NY' }
