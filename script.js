const students = {
      id: 1,
      name: "John Doe",
      age: 20,
      grade: "A",
      subjects: ["Mathematics", "Physics", "Chemistry","english","social","hrm"],
      secsub:["science","cs"],
      departments: {    // Nested object for departments in the school
              math: {
                head: "Mr. Williams",
                teachers: 10
              },
              science: {
                head: "Dr. Adams",
                teachers: 8
              },
              literature: {
                head: "Mrs. Bell",
                teachers: 6
              } 
            },

      favSub: function(firstsub,secondsub,thirdsub){
            return[this.subjects[firstsub], this.subjects[secondsub], this.secsub[thirdsub]]
      },
      bestsub:function({age,subjects,firstsub,secondsub}){
            console.log(`content given! ${age} and ${subjects} and ${firstsub}, ${secondsub}`);
      },
      goodSub:function(sub1,sub2,sub3){
            console.log(`Some good subjects are ${sub1},${sub2},${sub3}`);
      }
};

console.log("TOPIC-5.SHORT CIRCUITING");

// use any data type, return any data type, short circuiting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(0 || true);
console.log(undefined || null);

console.log(3 || 'jonas' || '' || 0 || true || undefined || null);
// console.log("TOPIC-4.REST PATTERN AND PARAMETERS");
// // 1)DESTRUCTURING
// // SPREAD ON RIGHT OF =
// // REST ON LEFT OF =
// const[a,b,...others]=[1,2,3,45,5,6];
// console.log(a,b,others);

// const [mainsub,,,secondarysub,...othersub]=[...students.subjects,...students.secsub];
// console.log(mainsub,secondarysub,othersub);

// const {math,...otherss}={...students.departments};
// console.log(otherss);

// // 2)FUNCTIONS

// const add=function(...args){
//       let sum=0;
//       for(let i=0;i<args.length;i++){
//         sum=sum+args[i];
//       }
//       console.log(sum);
// }
// add(2,3,4,5,6);

// const num=[2,3];
// add(...num);



// console.log("TOPIC-3.SPREAD OPERATOR");
// const arr=[9,0,2];
// const NewArrIn=[1,2,3,arr];
// const NewArr=[1,2,3,...arr];
// console.log(NewArrIn);
// console.log(NewArr);
// console.log(...NewArr);

// console.log("add array to elements");
// const newsub=[...students.subjects,"english"];
// console.log(newsub);
// console.log(...newsub);

// console.log("copy array");
// const copiedarr=[...NewArr];
// console.log(copiedarr);

// console.log("join array");
// const joinedarr=[...NewArr,...newsub];
// console.log(joinedarr);

// console.log("iterables: arrays, strings, maps, sets, not objects");
// const str='sinega';
// const letters=[...str];
// console.log(letters);
// console.log(...str);

// // const gsubs=[prompt("Enter subject 1: "),prompt("Enter subject 2: "),prompt("Enter subject 3: ")];
// // students.goodSub(...gsubs);

// console.log("spread operator on objects");
// const studentscopy={...students};
// studentscopy.name="john";
// console.log(students.name);
// console.log(studentscopy.name);
// /////////////////////////////////////
// students.bestsub({
//       age:'22',
//       subjects: "coimbatore",
//       firstsub: 'science',
//       secondsub: 'cs'
// })
// console.log("TOPIC-2");
// console.log("---destructuring object---");
// const{name,staff,subjects}=students;
// console.log(name,staff,subjects);
// // different variable names assigning
// console.log("---accessing values by assigning different keys---");
// const {
//       name:stuname,
//       staff:tutor
//       ,subjects:sub}=students;
// console.log(stuname,tutor,sub);
// console.log("---setting default values---");
// const{subject=[],secsub:secondsub=[]}=students;
// console.log(subject,secondsub);
// // mutating variables
// let mutate1=900;
// let mutate2=300;
// const obj={mutate1:20,mutate2:10,c:15};
// ({mutate1,mutate2}=obj);
// console.log(mutate1,mutate2);
// // nested object
// const{
//       departments:{
//             math:{head:h,teachers:t}
//       }
// }=students;
// console.log(h,t);

// console.log("TOPIC-1");
// console.log("---destructuring array in the object---");
// const [one,two,three]=students.subjects;
// console.log(one,two,three);

// console.log("---skip the second value---");
// let [one1,,two1]=students.subjects;
// console.log(one1,two1);

// console.log("---switching using temporary variable---") ; 
// const temp=one1;
// one1=two1;
// two1=temp;
// console.log(one1,two1);

// console.log("---switching using destructuring---");
// [one1, two1]=[two1,one1];
// console.log(one1,two1);

// console.log("---function destructuring method 1---");
// console.log(students.favSub(0,2,1));

// console.log("---function array destructuring method 2---");
// const[sub1,sub2,sub3]=students.favSub(0,2,1);
// console.log(sub1,sub2,sub3)


// // nested array
// console.log("---destructuring nested array---");
// const nested=[1,3,45,[9,4,5]];
// console.log("---accessing using index---");
// console.log(nested[0]);
// console.log(nested[1]);
// console.log(nested[2]);
// console.log(nested[3]);
// console.log("---skipping elements---");
// const[a,,,b]=nested
// console.log(a,b);
// console.log("---destructuring nested array using index---");
// const[i,j,k]=nested[3];
// console.log(i,j,k);
// const[q,,,[w,e]]=nested;
// console.log(q,w,e);
// console.log("---setting default values---");
// const[l=0,[f=91,u=42,r=20]]=[1,[3]];
// console.log(l,f,u,r)



