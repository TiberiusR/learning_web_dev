window.setTimeout(function() {
    let answer = prompt("What you want?");
    let todo = [];

    while(answer.toLowerCase() !== "quit") {
        if(answer.toLowerCase() === "new") {
            todo.push(prompt("Add something to do:"));
        } else if(answer.toLowerCase() === "list") {
            todo.forEach(function(t, index){
                alert(index + " - " + t);
            })
        } else if(answer.toLowerCase() === "delete") {
            answer = prompt("What index?");
            todo.splice(answer, 1);
            alert("Delete todo");
        } else {
            alert("invalid option");
        }
        answer = prompt("What you want?");
    }
}, 500);