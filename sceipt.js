let parent = document.querySelector("#list-parent");
let okbtn = document.querySelector('#btn')
let input = document.querySelector("#input")

let arr = []
if (arr.length == null) {

}
else {
    let showtaskk = localStorage.getItem("todo")
    // console.log(showtaskk)
    arr.push(showtaskk)
}




okbtn.addEventListener("click", function () {
    let task = input.value
    let newli = document.createElement("li");
    newli.innerHTML = task
    newli.setAttribute("class", " mb-2 border-[2px] border-slate-400")
    parent.append(newli)

    // for local storage
    arr.push(task)
    console.log(task)
    localStorage.setItem("todo", arr)
    input.value = " ";
})


if (arr.length == null) {

}
else {
    var showtask = localStorage.getItem("todo")
    let newarr = showtask.split(",")
    newarr = newarr.splice(0);
    newarr.forEach((tasks) => {
        if (tasks == "") { }
        else {
            let newli = document.createElement("li");
            newli.innerHTML = tasks
            newli.setAttribute("class", "  mb-2 border-[2px] border-slate-400")
            parent.append(newli)
        }

    })

}


parent.addEventListener("dblclick", function (event) {
    let ans = event.target.innerHTML;
    let oldvalues = localStorage.getItem("todo")

    oldvalues = oldvalues.split(",")
    let index = oldvalues.indexOf(ans)
    oldvalues.splice(index, 1)
    arr = oldvalues;
    arr = arr.join()
    localStorage.setItem("todo", arr);
    event.target.remove()


})
