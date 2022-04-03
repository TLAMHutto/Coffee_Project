var coffees = [
    {name: 'Light City', roast: 'light'},
    {name: 'Half City', roast: 'light'},
    {name: 'Cinnamon', roast: 'light'},
    {name: 'City', roast: 'medium'},
    {name: 'American', roast: 'medium'},
    {name: 'Breakfast', roast: 'medium'},
    {name: 'High', roast: 'dark'},
    {name: 'Continental', roast: 'dark'},
    {name: 'New Orleans', roast: 'dark'},
    {name: 'European', roast: 'dark'},
    {name: 'Espresso', roast: 'dark'},
    {name: 'Viennese', roast: 'dark'},
    {name: 'Italian', roast: 'dark'},
    {name: 'French', roast: 'dark'},
];
var list = '';
coffees.forEach(function(coffee) {
    if (coffee.roast == 'dark') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:black;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
    }
    if (coffee.roast == 'medium') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:brown;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
    }
    if (coffee.roast == 'light') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:orange;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
    }
});
document.getElementById('coffee-list').innerHTML = (list);
//filter list by roast type id=roast-select
var roast = document.getElementById('roast-select');
roast.addEventListener('change', function(e) {
    var roastType = e.target.value;
    var filteredCoffees = coffees.filter(function(coffee) {
        return coffee.roast === roastType;
    });
    var list = '';
    filteredCoffees.forEach(function(coffee) {
        if (coffee.roast == 'dark') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:black;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'medium') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:brown;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'light') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:orange;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
    });
    document.getElementById('coffee-list').innerHTML = (list);
});
//filter list by name id=search-bar
var search = document.getElementById('search-bar');
search.addEventListener('keyup', function(e) {
    var searchTerm = e.target.value;
    var filteredCoffees = coffees.filter(function(coffee) {
        return coffee.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    var list = '';
    filteredCoffees.forEach(function(coffee) {
        if (coffee.roast == 'dark') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:black;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'medium') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:brown;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'light') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:orange;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
    });
    document.getElementById('coffee-list').innerHTML = (list);
});
function addNew(input ,value){
    var newCoffee = document.getElementById('addBar').input = "";
    var newRoast = document.getElementById('roast-select').value = "";
    var newCoffee = {name: newCoffee, roast: newRoast};
    coffees.push(newCoffee);
    var list = '';
    coffees.forEach(function(coffee) {
        if (coffee.roast == 'dark') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:black;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'medium') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:brown;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
        if (coffee.roast == 'light') {
            list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:orange;font-size:2rem'>" + coffee.roast + "</span>" + "<br>" ;
        }
    });
    document.getElementById('coffee-list').innerHTML = (list);
}
console.log(addNew());




