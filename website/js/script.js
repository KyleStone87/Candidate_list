var Candidates = [{name:"Kyle Stone", likes: 100, id: '0'},
                {name: "Jillian Stone", likes: 1000, id: '1'},
                {name: "Stoli Stone", likes: 9999, id: '2'}];
var entry= 3
var removeLine = ""
var addLike = ""
var candidate_like
var last_entry = ""
$(document).ready(function(){
    //Display initial entry
    for (var x = 0; x<Candidates.length;x++){
        $("table").append("<tr id="+Candidates[x].id+"><td class='name'>"+Candidates[x].name+"</td><td class='likes'>"+Candidates[x].likes+"</td><td><button class = 'like'><i class = 'fa fa-thumbs-o-up'> Likes </i></button></td><td><button class ='delete'>Delete</button></td></tr>");
    }

    //add a new entry
    $("#add").on("click", function(){
        //take new name entry and add to Candidates object
        Candidates.push({name:$("#NewCandidate").val(),likes: 0, id: (entry.toString())});
        last_entry = $("table tr:last").attr("id")//find the id for the last row in the list
        //add new entry to the bottom of the list
        $("<tr id= "+entry+"><td class='name'>"+Candidates[Candidates.length-1].name+"</td><td class='likes'>"+Candidates[Candidates.length-1].likes+"</td><td><button class='like'><i class = 'fa fa-thumbs-o-up'> Likes </i></button></td><td><button class='delete'>Delete</button></td></tr>").insertAfter("#"+last_entry);
        entry++//increment for the next entry id
    })
    //delete button removes row
    $("table").on("click", ".delete", function(){
        removeLine = $(this).closest('tr').attr('id')//find the ID of row
        removeLine = Candidates.findIndex(i=>i.id===removeLine)//find the Candidate ID that matches the row ID
        Candidates.splice(removeLine,1)//remove the Candidate entry
        $(this).closest('tr').remove()//remove the Candidate entry from the DOM
    })
    $("table").on("click", ".like", function(){
        addLike = $(this).closest('tr').attr('id')//find the ID of row
        candidate_like = Number(Candidates.findIndex(i=>i.id===addLike))//find the Candidate ID that matches the row ID
        Candidates[candidate_like].likes++//increment the Candidates like count
        //update the Candidates like count in the DOM
        $("#"+addLike).replaceWith("<tr id='"+addLike+"'><td class='name'>"+Candidates[candidate_like].name+"</td><td class='likes'>"+Candidates[candidate_like].likes+"</td><td><button class='like'> <i class = 'fa fa-thumbs-o-up'> Likes </i></button></td><td><button class='delete'>Delete</button></td></tr>")
    })

})