// const names: Array<string> = ["Max", "Manuel"]; // 100% same as -> string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// });

//1
function merge<T extends object, U extends object>(objA: T, objB: U ) {
    return Object.assign(objA, objB);
};

const mergedObj = merge({name: "Max", hobbies: ["sport"]}, {age: 30});
console.log(mergedObj.name);

//2
interface Lengthy {
    length: number;
};

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "No Value."
    if (element.length === 1) {
      descriptionText = `Got 1 element.`;
    } else if (element.length > 1) {
      descriptionText = `Got ${element.length} elements.`;
    } 
    return [element, descriptionText];
};

console.log(countAndPrint(["Sports", "Cooking"]));

//3
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}

extractAndConvert({name: "Max"}, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
        return
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
};

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

//4
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
};

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};