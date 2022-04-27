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
var nameStyle = '<span style="font-size:6vw">';
var roastStyleDark = '<span style="color:black;font-size:3vw">';
var roastStyleMedium = '<span style="color:brown;font-size:3vw">';
var roastStyleLight = '<span style="color:orange;font-size:3vw">';

//function to print coffees to html id=coffee-list
var list = '';
coffees.forEach(function(coffee) {
    if(coffee.roast == 'dark') {
        list += nameStyle + coffee.name + '</span>' + roastStyleDark + coffee.roast + '</span>' + '<br>';
    }
    if(coffee.roast == 'medium') {
        list += nameStyle + coffee.name + '</span>' + roastStyleMedium + coffee.roast + '</span>' + '<br>';
    }
    if(coffee.roast == 'light') {
        list += nameStyle + coffee.name + '</span>' + roastStyleLight + coffee.roast + '</span>' + '<br>';
    }
});
$('#coffee-list').html(list);
//functin to filter coffees by roast id=roast-select
$('#roast-select').change(function() {
    var selected = $('#roast-select').val();
    var filtered = coffees.filter(function(coffee) {
        return coffee.roast == selected;
    });
    var list = '';
    filtered.forEach(function(coffee) {
        if(coffee.roast == 'dark') {
            list += nameStyle + coffee.name + '</span>' + roastStyleDark + coffee.roast + '</span>' + '<br>';
        }
        if(coffee.roast == 'medium') {
            list += nameStyle + coffee.name + '</span>' + roastStyleMedium + coffee.roast + '</span>' + '<br>';
        }
        if(coffee.roast == 'light') {
            list += nameStyle + coffee.name + '</span>' + roastStyleLight + coffee.roast + '</span>' + '<br>';
        }
    });
    $('#coffee-list').html(list);
}
);
//function to show all coffees if #roast-select=all
$('#roast-select').change(function() {
    var selected = $('#roast-select').val();
    if(selected == 'all') {
        var list = '';
        coffees.forEach(function(coffee) {
            if(coffee.roast == 'dark') {
                list += nameStyle + coffee.name + '</span>' + roastStyleDark + coffee.roast + '</span>' + '<br>';
            }
            if(coffee.roast == 'medium') {
                list += nameStyle + coffee.name + '</span>' + roastStyleMedium + coffee.roast + '</span>' + '<br>';
            }
            if(coffee.roast == 'light') {
                list += nameStyle + coffee.name + '</span>' + roastStyleLight + coffee.roast + '</span>' + '<br>';
            }
        });
        $('#coffee-list').html(list);
    }
}
);
//function to add new coffee to coffees array
var nameInput = document.getElementById('addBar');
var roastType = document.getElementById('roastSelect');
$('form.add-coffee-container').submit(function(e) {
    e.preventDefault();
    coffees.push({name: nameInput.value, roast: roastType.value});
    var list = '';
    coffees.forEach(function(coffee) {
        if (coffee.roast == 'dark') {
            list += nameStyle + coffee.name + '</span>' + roastStyleDark + coffee.roast + '</span>' + '<br>';
        }
        if (coffee.roast == 'medium') {
            list += nameStyle + coffee.name + '</span>' + roastStyleMedium + coffee.roast + '</span>' + '<br>';
        }
        if (coffee.roast == 'light') {
            list += nameStyle + coffee.name + '</span>' + roastStyleLight + coffee.roast + '</span>' + '<br>';
        }
    });
    $('#coffee-list').html(list);
}
);



