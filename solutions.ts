
const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
};

multiplyValue(5)
multiplyValue(5, 5)
multiplyValue(0)



const processInput = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase();

    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive"
    }

}

processInput("  Tanjil ")
processInput(10)
processInput(true)




type Coordinate = readonly [number, number, string];

const formatCoordinate = (coordinate: Coordinate): string => {

    const [latitude, longitude, locationName] = coordinate;

    return `Location : ${locationName} (${latitude} , ${longitude})`
}

formatCoordinate([1234.234, 2345.23, "Dhaka"])


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}

concatenateArrays([2, 3, 4, 5], [235, 34, 34])



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {

    return courses.filter(course => course.isPublished === true && course.students >= minStudents)
}

const courses: Course[] = [
    { title: "typeScript", students: 34, isPublished: true },
    { title: "Level1", students: 666, isPublished: true },
    { title: "javaScript", students: 520, isPublished: true }
]

getPopularCourses(courses, 40)




const pluckValues = <T, K extends keyof T>
    (items: T[], key: K): T[K][] => {

    return items.map(item => item[key])
}

const users = [
    { name: "muntasir", id: 23, role: "superAdmin" },
    { name: "shakib", id: 26, role: "admin" },
    { name: "Sazzad", id: 63, role: "user" },
]

pluckValues(users, "id")




class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary
    }
    getDetails(): string {
        return `Employee : ${this.name} , Base Salary : ${this.baseSalary}`
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary)
        this.department = department

    }
    getRoleInfo(): string {
        return `Manager of ${this.department} : ${this.name}`
    }
}

const manager = new Manager('Alich', 55000, "fullstack ")

manager.getDetails();
manager.getRoleInfo();


const validateAgeAsync  =  (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        }
        else {
            reject( new Error("Access Denied: Must be 18 or older"))
        }
    })
}

 validateAgeAsync(15)
