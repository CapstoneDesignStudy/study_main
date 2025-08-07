const JH = {
    name: 'JH',
    age: 22,
};

const Ojj = {
    name: 'JG',
    age: 25,
    part: {
        title: 'Backend Developer',
    },
};

// 직책을 표현해보자.
// job title이 있다면...
function displayJobTitle(person) {
    if (person.job?.title) { 
        console.log(person.job.title);
    }
}