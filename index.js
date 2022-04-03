var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var list = '';
coffees.forEach(function(coffee) {
    if (coffee.roast == 'dark') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:black'>" + coffee.roast + "</span>" + "\n" ;
    }
    if (coffee.roast == 'medium') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:brown'>" + coffee.roast + "</span>" + "\n" ;
    }
    if (coffee.roast == 'light') {
        list += "<span style=font-size:3rem>" + coffee.name + "</span>" + "<span style='color:bisque'>" + coffee.roast + "</span>" + "\n" ;
    }


});

document.getElementById('coffee-list').innerHTML = (list);






