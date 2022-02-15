interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string; 
    [propName: string]: any;
}

const teacher3; Teacher = {
    firstName: 'Jerry',
    lastName: 'Lewis',
    fullTimeEmployee: false,
    yearsOfExperience: 4,
    location: Deez,
    contract: false,
};

console.log(teacher3);
