//1

class Student {
    
    constructor(fullName, group, gender, age) {
      
      this.fullName = fullName; 
      this.group = group;       
      this.gender = gender;    
      this.age = age;           
    }

    
    displayInfo() {
      console.log(this.fullName);
      console.log(this.group);
      console.log(this.gender);
      console.log(this.age);
    }
  }
const student1 = new Student ('Какостиков Андрей', '0K9491','M', 1111)
 
  const fullName1 = prompt('Введите ФИО студента:');
  const group1 = prompt('Введите группу студента:');
  const gender1 = prompt('Введите пол студента (М/Ж):');
  const age1 = prompt('Введите возраст студента:');

  const student = new Student(fullName1, group1, gender1, age1);

  function convertToJson() {
    
    const jsonString = JSON.stringify(student1);

    
    const parsedObject = JSON.parse(jsonString);

    
    const filteredObject = {};
    for (const key in parsedObject) {
      if (typeof parsedObject[key] == 'string') {
        filteredObject[key] = parsedObject[key];
      }
    }


    document.getElementById('jsonOutput').innerText = 'JSON-строка: ' + jsonString + '\n\nПреобразованный и отфильтрованный объект: ' + JSON.stringify(filteredObject);
  }

  const jsonString = '{"fullName": "Иванов Иван Иванович", "group": "Группа 101", "gender": "М"}';

const jsonStringFormatted = `{
  "fullName": "Иванов Иван Иванович",
  "group": "Группа 101",
  "gender": "М"
}`;