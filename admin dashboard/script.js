var status_1='less';
// function seemore() {
//     console.log("Your message");
    
//     document.getElementById('appendData').innerHTML =data +data +data;
// }

var data = `<div class="row">
    <div class="col-sm-6 my-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">A list item</li>
                    <li class="list-group-item">A list item</li>
                    <li class="list-group-item">A list item</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="col-sm-6 my-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">A list item</li>
                    <li class="list-group-item">A list item</li>
                    <li class="list-group-item">A list item</li>
                </ol>
            </div>
        </div>
    </div>    
</div>`;


// var status = "less";

function seemore()
{
    var text="Here is some text that I want added to the HTML file";

    if (status_1 == "less") {
        document.getElementById("appendData").innerHTML=data+data+data;
        document.getElementById("seemore").innerHTML = "See Less    &uarr;";
        status_1 = "more";
    } else if (status_1 == "more") {
        document.getElementById("appendData").innerHTML = "";
        document.getElementById("seemore").innerHTML = "See More    &darr;";
        status_1 = "less"
    }
}

