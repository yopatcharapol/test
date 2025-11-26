var studen={

    662001 :{name:"loy" ,age:22, mejor:"CPE"},
    662002 :{name:"josh", age:24, mejor:"CS"},
    662003 :{name:"mo" ,age:20, mejor:"SE"}

}
for(id in studen){

    console.log(`
id${id}
\tname: ${studen[id]["name"]}  
\tage: ${studen[id]["age"]}  
\tmejor: ${studen[id]["mejor"]} `)
    
}